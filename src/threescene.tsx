// MyThreeScene.tsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

// The actual scene component that will be used inside the Canvas
function Scene() {
  const gltf = useLoader(GLTFLoader, './assets/CameraBkdTex.glb');
  const modelRef = useRef();
  const { camera } = useThree();
  
  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        if (child.morphTargetInfluences) {
          child.morphTargetInfluences[0] = 0;
        }
      });
    }
    
    camera.position.z = 5;
  }, [gltf, camera]);
  
  useFrame(({ clock }) => {
    if (modelRef.current) {
      const model = modelRef.current;
      model.rotation.y = -(-1.5 + Math.PI/2 + (3/2) );
      model.rotation.x = -1.25 + (2.5/2) ;
      model.position.z = 1;
      
      // Morph target animation
      const time = clock.getElapsedTime();
      const morphValue = Math.abs(Math.sin(time/10));
      model.traverse((child) => {
        if (child.morphTargetInfluences) {
          child.morphTargetInfluences[0] = morphValue;
        }
      });
    }
  });
  
  return (
    <>
      {/* Lights */}
      <directionalLight position={[2, 2, 5]} castShadow intensity={1} />
      <directionalLight position={[-2, 2, -5]} castShadow intensity={1} />
      <directionalLight position={[4, 2, 4]} intensity={1} />
      
      {/* Model */}
      <primitive 
        ref={modelRef} 
        object={gltf.scene} 
        onClick={(e) => {
          // Handle click interactions
          e.stopPropagation();
          const obj = e.object;
          if (obj.morphTargetInfluences) {
            obj.morphTargetInfluences[0] = obj.morphTargetInfluences[0] === 1 ? 0 : 1;
            console.log(obj.name, 'Pressed');
          }
        }}
      />
      <OrbitControls />
    </>
  );
}

// Main component with Canvas
function MyThreeScene() {
  return (
    <Canvas style={{ background: '#87CEEB', height: '500px' }}>
      <Scene />
    </Canvas>
  );
}

export default MyThreeScene;