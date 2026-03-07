'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CyberSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#00f3ff"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0}
                    metalness={1}
                    emissive="#bd00ff"
                    emissiveIntensity={0.2}
                    wireframe={true}
                />
            </Sphere>
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#bd00ff"
                    attach="material"
                    distort={0.4}
                    speed={3}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.3}
                />
            </Sphere>
        </Float>
    );
}

function GridPlane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.1} />
        </mesh>
    )
}

export default function HeroScene() {
    return (
        <div className="h-full w-full absolute top-0 left-0 -z-10 opacity-60">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />
                <CyberSphere />
                <GridPlane />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
