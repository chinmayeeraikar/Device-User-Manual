import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Model } from './Model';

type SceneProps = {
  modelPath: string;
};

export function Scene({ modelPath }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 45 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <Suspense fallback={null}>
        <Model modelPath={modelPath} scale={1} />
        <Environment preset="sunset" />
      </Suspense>
      
      <OrbitControls />
    </Canvas>
  );
}
