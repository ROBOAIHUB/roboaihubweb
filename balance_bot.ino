#include <Wire.h>
#include <EEPROM.h>
#include "I2Cdev.h"
#include "MPU6050_6Axis_MotionApps20.h"
#include "helper_3dmath.h"
#include <SoftwareSerial.h>

// ===================== Pin Definitions =====================
#define MOTOR_A_DIR 5
#define MOTOR_B_DIR 6
#define MOTOR_A_PWM 9
#define MOTOR_B_PWM 10

#define SLACK_A 7  // Adjust motor slack values
#define SLACK_B 7

#define BLUE_RX 11
#define BLUE_TX 4
#define INTERRUPT_PIN 2

// ===================== PID Constants =====================
#define BALANCE_KP 32  
#define BALANCE_KI 190
#define BALANCE_KD 1.6
#define ROTATE_KP 0.6
#define ROTATE_KI 0.05
#define ROTATE_KD 0.08

// ===================== Global Variables =====================
MPU6050 mpu;
SoftwareSerial Blue(BLUE_RX, BLUE_TX);

float setpoint = -0.1;
float input, output;
float last_error = 0, error_sum = 0;
int motor_a, motor_b;
char command;
bool dmpReady = false;
uint8_t devStatus;
uint16_t packetSize;
uint8_t fifoBuffer[64];
Quaternion q;
VectorFloat gravity;
float ypr[3];

// ===================== Function Prototypes =====================
void initializeMPU();
void getSensorValues();
void computePID();
void controlMotors();
void processBluetooth();
void debugPrint();

// ===================== Setup Function =====================
void setup() {
    Serial.begin(115200);
    Blue.begin(9600);
    Wire.begin();
    pinMode(MOTOR_A_DIR, OUTPUT);
    pinMode(MOTOR_B_DIR, OUTPUT);
    pinMode(MOTOR_A_PWM, OUTPUT);
    pinMode(MOTOR_B_PWM, OUTPUT);
    initializeMPU();
}

// ===================== Main Loop =====================
void loop() {
    getSensorValues();
    computePID();
    controlMotors();
    processBluetooth();
    debugPrint();
}

// ===================== MPU6050 Initialization =====================
void initializeMPU() {
    mpu.initialize();
    devStatus = mpu.dmpInitialize();
    if (devStatus == 0) {
        mpu.setDMPEnabled(true);
        attachInterrupt(digitalPinToInterrupt(INTERRUPT_PIN), getSensorValues, RISING);
        dmpReady = true;
        packetSize = mpu.dmpGetFIFOPacketSize();
    } else {
        Serial.println("MPU6050 initialization failed!");
    }
}

// ===================== Sensor Data Retrieval =====================
void getSensorValues() {
    if (!dmpReady) return;
    if (mpu.dmpGetCurrentFIFOPacket(fifoBuffer)) {
        mpu.dmpGetQuaternion(&q, fifoBuffer);
        mpu.dmpGetGravity(&gravity, &q);
        mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
        input = ypr[1] * 180 / M_PI;  // Convert pitch to degrees
    }
}

// ===================== PID Computation =====================
void computePID() {
    float error = setpoint - input;
    error_sum += error;
    float dError = error - last_error;
    output = (BALANCE_KP * error) + (BALANCE_KI * error_sum) + (BALANCE_KD * dError);
    last_error = error;
}

// ===================== Motor Control =====================
void controlMotors() {
    motor_a = output;
    motor_b = output;
    
    if (motor_a > 255) motor_a = 255;
    if (motor_b > 255) motor_b = 255;
    if (motor_a < -255) motor_a = -255;
    if (motor_b < -255) motor_b = -255;

    if (motor_a > 0) {
        analogWrite(MOTOR_A_PWM, motor_a);
        digitalWrite(MOTOR_A_DIR, HIGH);
    } else {
        analogWrite(MOTOR_A_PWM, -motor_a);
        digitalWrite(MOTOR_A_DIR, LOW);
    }
    
    if (motor_b > 0) {
        analogWrite(MOTOR_B_PWM, motor_b);
        digitalWrite(MOTOR_B_DIR, HIGH);
    } else {
        analogWrite(MOTOR_B_PWM, -motor_b);
        digitalWrite(MOTOR_B_DIR, LOW);
    }
}

// ===================== Bluetooth Control =====================
void processBluetooth() {
    if (Blue.available()) {
        command = Blue.read();
        switch (command) {
            case 'F': motor_a += 50; motor_b += 50; break;
            case 'B': motor_a -= 50; motor_b -= 50; break;
            case 'L': motor_a -= 30; motor_b += 30; break;
            case 'R': motor_a += 30; motor_b -= 30; break;
            case 'S': motor_a = 0; motor_b = 0; break;
        }
    }
}

// ===================== Debugging Output =====================
void debugPrint() {
    Serial.print("Pitch: "); Serial.print(input);
    Serial.print(" | Motor A: "); Serial.print(motor_a);
    Serial.print(" | Motor B: "); Serial.println(motor_b);
}
