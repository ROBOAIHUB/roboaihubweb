"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Html } from "@react-three/drei";
import * as THREE from "three";

function RobotHead() {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Gentle hovering
        groupRef.current.position.y = Math.sin(time * 2) * 0.1;
        // Head subtle rotation
        groupRef.current.rotation.y = Math.sin(time) * 0.1;
    });

    return (
        <group ref={groupRef} position={[0, -0.5, 0]}>
            {/* Head Container */}
            <group position={[0, 0.8, 0]}>
                {/* Main Head Shape (White) */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.4, 1.1, 1]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
                </mesh>
                {/* Rounded corners for head (Approximation with sphere) */}
                <mesh position={[0, 0, 0]} scale={[1.42, 1.15, 1.1]}>
                    <sphereGeometry args={[0.7, 32, 32]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
                </mesh>

                {/* Blue Top Detail */}
                <mesh position={[0, 0.75, 0]} scale={[1, 0.4, 1]}>
                    <sphereGeometry args={[0.7, 32, 32]} />
                    <meshStandardMaterial color="#0055ff" roughness={0.2} metalness={0.9} />
                </mesh>

                {/* Face Black Screen Area */}
                <mesh position={[0, 0.05, 0.6]} rotation={[0, 0, 0]}>
                    <capsuleGeometry args={[0.5, 0.8, 4, 16]} />
                    <meshStandardMaterial color="#111" roughness={0.2} metalness={0.9} />
                </mesh>
                {/** The capsule needs to be rotated 90 deg via geometry or grouping. Doing a hacky curved screen with a sphere intersection for now is safer */}
                <mesh position={[0, 0.05, 0.55]} scale={[1.1, 0.7, 0.5]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial color="#050505" roughness={0.1} metalness={1} />
                </mesh>

                {/* Left Eye (Glowing Red) */}
                <mesh position={[-0.35, 0.05, 1.05]} scale={[1, 1.2, 0.5]}>
                    <sphereGeometry args={[0.18, 32, 32]} />
                    <meshStandardMaterial
                        color="#ff0000"
                        emissive="#ff3300"
                        emissiveIntensity={3}
                        toneMapped={false}
                    />
                </mesh>

                {/* Right Eye (Glowing Red) */}
                <mesh position={[0.35, 0.05, 1.05]} scale={[1, 1.2, 0.5]}>
                    <sphereGeometry args={[0.18, 32, 32]} />
                    <meshStandardMaterial
                        color="#ff0000"
                        emissive="#ff3300"
                        emissiveIntensity={3}
                        toneMapped={false}
                    />
                </mesh>

                {/* Left Ear/Headphone (Blue/White) */}
                <mesh position={[-0.85, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
                </mesh>
                <mesh position={[-0.95, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
                    <meshStandardMaterial color="#0055ff" emissive="#0022aa" emissiveIntensity={0.5} />
                </mesh>

                {/* Right Ear/Headphone (Blue/White) */}
                <mesh position={[0.85, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
                </mesh>
                <mesh position={[0.95, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
                    <meshStandardMaterial color="#0055ff" emissive="#0022aa" emissiveIntensity={0.5} />
                </mesh>
            </group>

            {/* Body/Sholder Hint */}
            <mesh position={[0, -0.4, 0]}>
                <cylinderGeometry args={[0.4, 0.7, 0.7, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
            </mesh>
            <mesh position={[0, -0.3, 0.36]}>
                <boxGeometry args={[0.2, 0.2, 0.1]} />
                <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
            </mesh>

        </group>
    );
}

export default function ChatbotScene() {
    return (
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true, antialias: true }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0055ff" />
            <RobotHead />
        </Canvas>
    );
}
