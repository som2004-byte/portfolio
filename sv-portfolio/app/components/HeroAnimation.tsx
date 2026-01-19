"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Sparkles, PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";

const AnimatedShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <group>
                {/* Core Neural Sphere */}
                <Sphere args={[1, 64, 64]} scale={1.8}>
                    <MeshDistortMaterial
                        color="#3B82F6"
                        attach="material"
                        distort={0.3}
                        speed={2}
                        roughness={0.2}
                        metalness={0.9}
                        emissive="#1d4ed8"
                        emissiveIntensity={0.2}
                    />
                </Sphere>

                {/* Outer Wireframe Network */}
                <Sphere args={[1, 32, 32]} scale={2.4} ref={meshRef}>
                    <meshStandardMaterial
                        color="#60a5fa"
                        wireframe
                        transparent
                        opacity={0.1}
                        roughness={0}
                        metalness={0.5}
                    />
                </Sphere>

                {/* Floating Particles */}
                <Sparkles count={150} scale={6} size={3} speed={0.4} opacity={0.6} color="#93c5fd" />
            </group>
        </Float>
    );
};

export default function HeroAnimation() {
    return (
        <div className="h-full w-full min-h-[400px] hover:cursor-grab active:cursor-grabbing">
            <Canvas className="bg-transparent" dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                <ambientLight intensity={1.0} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#A855F7" />
                <spotLight
                    position={[0, 10, 0]}
                    angle={0.5}
                    penumbra={1}
                    intensity={2}
                    color="#ffffff"
                />

                <AnimatedShape />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.8}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
}
