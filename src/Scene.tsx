import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('.gltf');
  return <primitive object={scene} />;
};

const RotatingCube: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  // Rotate the cube on every frame update
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
    </Canvas>
  );
};

export default Scene;