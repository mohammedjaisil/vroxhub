"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    PerspectiveCamera,
    Environment,
    ContactShadows,
    PresentationControls
} from "@react-three/drei";
import * as THREE from "three";

const RetroCamera = () => {
    const group = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(time / 4) * 0.15;
    });

    return (
        <group ref={group}>
            {/* Camera Body - Retro Boxy Shape */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1.4, 1.8]} />
                <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.8} />
            </mesh>

            {/* Front Lens Barrel */}
            <group position={[0, 0.2, 0.9]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
                    <meshStandardMaterial color="#111111" metalness={0.6} roughness={0.4} />
                </mesh>
                {/* Lens Flare Ring */}
                <mesh position={[0, 0, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.42, 0.015, 16, 100]} />
                    <meshStandardMaterial color="#silver" metalness={1} />
                </mesh>
            </group>

            {/* Upper Film Reel */}
            <group position={[0, 1.2, -0.4]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
                    <meshStandardMaterial color="#333333" metalness={0.8} />
                </mesh>
                {/* Inner Detail */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.1, 0.1, 0.22, 16]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
                </mesh>
            </group>

            {/* Side Viewfinder */}
            <group position={[0.6, 0.3, 0.2]}>
                <mesh>
                    <boxGeometry args={[0.2, 0.3, 0.8]} />
                    <meshStandardMaterial color="#1a1a1a" />
                </mesh>
                <mesh position={[0.1, 0, 0.3]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="#000000" metalness={1} />
                </mesh>
            </group>

            {/* Side Plate / Controls */}
            <mesh position={[-0.51, 0, 0]}>
                <boxGeometry args={[0.02, 0.8, 1.2]} />
                <meshStandardMaterial color="#444444" metalness={0.9} />
            </mesh>

            {/* Red Light (Recording) */}
            <mesh position={[0, 0.8, 0.8]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
            </mesh>

            {/* Handle */}
            <mesh position={[0, 0.8, -1]} rotation={[-Math.PI / 4, 0, 0]}>
                <boxGeometry args={[0.15, 0.8, 0.15]} />
                <meshStandardMaterial color="#222222" />
            </mesh>

            {/* Cassette Slot Detail */}
            <mesh position={[0.51, -0.2, 0]}>
                <boxGeometry args={[0.02, 0.4, 0.9]} />
                <meshStandardMaterial color="#111111" />
            </mesh>

            {/* Buttons on Side */}
            {[0, 1, 2].map((i) => (
                <mesh key={i} position={[0.52, 0.2, -0.3 + i * 0.2]}>
                    <boxGeometry args={[0.02, 0.1, 0.1]} />
                    <meshStandardMaterial color={i === 0 ? "#ff4444" : "#ffffff"} emissive={i === 0 ? "#ff0000" : "#000000"} emissiveIntensity={0.5} />
                </mesh>
            ))}
        </group>
    );
};

const CameraObject = () => {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas dpr={[1, 1.5]} shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={40} />
                <Environment preset="studio" />

                <PresentationControls
                    global
                    rotation={[0.4, 0.8, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 2, Math.PI / 2]}
                >
                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                        <RetroCamera />
                    </Float>
                </PresentationControls>

                <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.5}
                    far={4}
                />
            </Canvas>
        </div>
    );
};

export default CameraObject;
