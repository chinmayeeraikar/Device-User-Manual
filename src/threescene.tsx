// MyThreeScene.tsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mouse } from 'lucide-react';
//import * as THREE from 'three';

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
      //console.log(gltf.scene)
    }

    camera.position.z = 5;
  }, [gltf, camera]);

  let feature = 'View'
  useFrame(({ clock }) => {
    //console.log(camera.rotation.x, camera.rotation.y)
    const featureDemo = (event) => {
      if (event && event.detail && modelRef.current) {
        feature = (event.detail);
        console.log("Event triggered by:", event.detail.title);
        camera.position.x = 0
        camera.position.y = 3.061616997868383e-16
        camera.position.z = 4
        camera.rotation.x = -6.123233995736766e-17 
        camera.rotation.y = 0
        camera.rotation.z = 0
      }
    };

    const closeFeature = (event) => {
      if (event && event.detail && modelRef.current) {
        feature = (event.detail);
        console.log("Event triggered by:", event.detail.title);
        camera.position.x = 0
        camera.position.y = 3.061616997868383e-16
        camera.position.z = 4
        camera.rotation.x = -6.123233995736766e-17 
        camera.rotation.y = 0
        camera.rotation.z = 0
      }
    }
    if (modelRef.current) {
      const model = modelRef.current;
      window.addEventListener("featureSelected", featureDemo);
      window.addEventListener("popupclose", closeFeature);
      //console.log(feature)
      if(feature == 'View'){
        model.rotation.y = -(-1.5 + Math.PI/2 + (3/2) );
        model.rotation.x = -1.25 + (2.5/2) ;
        model.position.y = 1;
        console.log(model.position.z, model.rotation.z)
        //model.children[16].rotation.y = -Math.PI;
        const time = clock.getElapsedTime();
        const morphValue = Math.abs(Math.sin(time/10));
        model.children[0].traverse((child) => {
          if (child.morphTargetInfluences) {
            child.morphTargetInfluences[0] = morphValue;
          }
        });
      }
      else if(feature = 'Zoom'){
        model.rotation.x = -1.25 + (2.5/2) - Math.PI/2;
        model.rotation.y = -(-1.5 - Math.PI/2 + (3/2) );
        //console.log(model.rotation.x, model.rotation.y)
      }
    }
  });

  return (
    <>

      <directionalLight position={[2, 2, 5]} castShadow intensity={1} />
      <directionalLight position={[-2, 2, -5]} castShadow intensity={1} />
      <directionalLight position={[4, 2, 4]} intensity={1} />
      <ambientLight position = {[5,5,5]} intensity = {1}/>

      <primitive 
        ref={modelRef} 
        object={gltf.scene} 
        onClick={(e) => {

          e.stopPropagation();
          const obj = e.object;
          if (obj.morphTargetInfluences) {
            obj.morphTargetInfluences[0] = obj.morphTargetInfluences[0] === 1 ? 0 : 1;
            console.log(obj.name, 'Pressed');
              const butnprs = new CustomEvent("toggleActiveClass", {
                detail: obj.name
              });
              window.dispatchEvent(butnprs);
          }
        }}
      />
      <OrbitControls />
    </>
  );
}

function MyThreeScene() {
  return (
    <Canvas style={{ background: '0xffffff, 0', height: '800px' }}>
      <Scene />
    </Canvas>
  );
}

export default MyThreeScene;