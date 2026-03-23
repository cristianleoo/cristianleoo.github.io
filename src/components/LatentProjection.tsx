'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Center, QuadraticBezierLine, Line } from '@react-three/drei';
import * as THREE from 'three';

function VectorSpace() {
  return (
    <group>
      {/* X Axis - High Visibility Red */}
      <Line points={[[-5, 0, 0], [5, 0, 0]]} color="#ef4444" lineWidth={3} />
      <Text position={[5.5, 0, 0]} fontSize={0.2} color="#ef4444" fontStyle="italic">X_axis</Text>
      
      {/* Y Axis - High Visibility Green */}
      <Line points={[[0, -5, 0], [0, 5, 0]]} color="#10b981" lineWidth={3} />
      <Text position={[0, 5.5, 0]} fontSize={0.2} color="#10b981" fontStyle="italic">Y_axis</Text>
      
      {/* Z Axis - High Visibility Blue */}
      <Line points={[[0, 0, -5], [0, 0, 5]]} color="#3b82f6" lineWidth={3} />
      <Text position={[0, 0, 5.5]} fontSize={0.2} color="#3b82f6" fontStyle="italic">Z_latent</Text>
      
      {/* Heavy Grid Divisions */}
      <gridHelper args={[10, 10, "#a1a1aa", "#3f3f46"]} position={[0, 0, 0]} />
      
      {/* Axis Ticks (X) */}
      {[ -4, -2, 2, 4 ].map((x) => (
        <Line key={`x-${x}`} points={[[x, -0.1, 0], [x, 0.1, 0]]} color="#ef4444" lineWidth={2} />
      ))}
      {/* Axis Ticks (Y) */}
      {[ -4, -2, 2, 4 ].map((y) => (
        <Line key={`y-${y}`} points={[[-0.1, y, 0], [0.1, y, 0]]} color="#10b981" lineWidth={2} />
      ))}
    </group>
  );
}

function IdentityVector({ active }: { active: boolean }) {
  const lineRef = useRef<any>(null);

  useFrame(() => {
    if (!lineRef.current) return;
    const time = performance.now() * 0.001;
    lineRef.current.material.opacity = active ? (0.8 + Math.sin(time * 3) * 0.2) : 0;
  });

  return (
    <group>
      {/* Strong Vector from Origin to Identity */}
      <QuadraticBezierLine
        ref={lineRef}
        start={[0, 0, 0]}
        end={[2, 2, 2]}
        mid={[1.5, 2.5, 1]}
        color="#3b82f6"
        lineWidth={5}
        transparent
      />
      <Text
        position={[2.2, 2.2, 2.2]}
        fontSize={0.15}
        color="#3b82f6"
        fontStyle="normal"
      >
        PROJECTION_VECTOR
      </Text>
    </group>
  );
}

export default function LatentProjection({ active }: { active: boolean }) {
  return (
    <div className={`w-full h-[500px] md:h-[700px] transition-all duration-[2000ms] ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <Canvas camera={{ position: [6, 4, 8], fov: 40 }}>
        <color attach="background" args={["#ffffff"]} /> {/* Clear white chart background */}
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        
        <VectorSpace />
        <IdentityVector active={active} />

        <Center top position={[2, 2.5, 2]}>
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
            <Text
              fontSize={0.5}
              color="#09090b"
              maxWidth={10}
            >
              CRISTIAN
              <meshStandardMaterial emissive="#3b82f6" emissiveIntensity={0.5} />
            </Text>
          </Float>
        </Center>

        <Center bottom position={[2, 1.8, 2]}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <Text
              fontSize={0.8}
              color="#71717a"
              fontStyle="italic"
            >
              LEO
              <meshStandardMaterial transparent opacity={0.8} emissive="#10b981" emissiveIntensity={0.2} />
            </Text>
          </Float>
        </Center>

        {/* Origin Node */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} />
        </mesh>
      </Canvas>
      
      {/* Legend */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-2 text-[10px] font-mono text-zinc-900 border border-zinc-200 bg-white/80 p-4 rounded-lg backdrop-blur shadow-sm text-right">
        <p className="font-bold border-b border-zinc-100 pb-1 mb-1 tracking-widest">CHART_LEGEND</p>
        <p>X: FEATURE_DIM_01</p>
        <p>Y: FEATURE_DIM_02</p>
        <p>Z: LATENT_SPACE</p>
        <p className="text-blue-600 mt-2">V_ID: OPTIMIZED_PROJECTION</p>
      </div>
    </div>
  );
}
