import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type GLTFResult = GLTF & {
  nodes: Record<string, Mesh>;
  materials: Record<string, THREE.Material>;
};

type ModelProps = {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

export function Model({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelProps) {
  const { scene } = useGLTF(modelPath) as GLTFResult;
  const modelRef = useRef<THREE.Group>(null);
  
  // Optional: Add animation to the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale} 
      position={position}
      rotation={rotation}
    />
  );
}
