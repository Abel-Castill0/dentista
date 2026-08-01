"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";

function DentalGeometric() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh scale={1.2}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#185ADB"
          emissive="#185ADB"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
          distort={0.15}
          speed={2}
        />
      </mesh>
      <mesh scale={0.6} position={[1.3, 0.8, -0.5]}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#5B9BD5"
          emissive="#5B9BD5"
          emissiveIntensity={0.15}
          roughness={0.3}
          metalness={0.6}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
      <mesh scale={0.4} position={[-1.2, -0.6, 0.3]}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={0.1}
          roughness={0.2}
          metalness={0.7}
          distort={0.25}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#5B9BD5" />
        <Suspense fallback={null}>
          <DentalGeometric />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
