server.on("/", HTTP_GET, handleRoot);
server.onNotFound(handleNotFound);

wsCamera.onEvent(onCameraWebSocketEvent);
server.addHandler(&wsCamera);

wsCarInput.onEvent(onCarInputWebSocketEvent);
server.addHandler(&wsCarInput);

server.begin();
Serial.println("HTTP server started");

setupCamera();
}

void loop() 
{
    wsCamera.cleanupClients();
    wsCarInput.cleanupClients();
    
    sendCameraPicture();
    
    Serial.printf("SPIRam Total heap: %d, SPIRam Free Heap: %d\n", 
                  ESP.getPsramSize(), 
                  ESP.getFreePsram());
}
