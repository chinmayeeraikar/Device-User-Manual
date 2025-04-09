// MyThreeScene.tsx

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mouse } from 'lucide-react';

function Scene() {
  const gltf = useLoader(GLTFLoader, './assets/CameraFinal.glb');
  const modelRef = useRef();
  const { camera } = useThree();
  const controlsRef = useRef();
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  let deltaX: number = 0;
  let deltaY: number = 0;

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

  const onMouseDown = (event) => {
    previousMousePosition.current = {
      x: event.clientX,
      y: event.clientY
    };
    isDragging.current = true;
  };

  const onMouseMove = (event) => {
    if (isDragging.current) {
      deltaX = event.clientX - previousMousePosition.current.x;
      deltaY = event.clientY - previousMousePosition.current.y;
      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  let feature = 'View';

  useFrame(({ clock }) => {
    const featureDemo = (event) => {
      if (event && event.detail && modelRef.current) {
        const model = modelRef.current;
        feature = event.detail;
        console.log("Event triggered by:", event.detail.title);
        camera.position.x = 0;
        camera.position.y = 3.061616997868383e-16;
        camera.position.z = 5;
        camera.rotation.x = -6.123233995736766e-17;
        camera.rotation.y = 0;
        camera.rotation.z = 0;
        model.children[0].traverse((child) => {
          if (child.morphTargetInfluences) {
            child.morphTargetInfluences[0] = 0;
          }
        });
        if (controlsRef.current) {
          controlsRef.current.enabled = false;
        }
      }
    };

    const closeFeature = (event) => {
      if (event && event.detail && modelRef.current) {
        feature = 'View';
        console.log("Event triggered by:", event.detail.title);
        camera.position.x = 0;
        camera.position.y = 3.061616997868383e-16;
        camera.position.z = 5;
        camera.rotation.x = -6.123233995736766e-17;
        camera.rotation.y = 0;
        camera.rotation.z = 0;
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
        }
      }
    };

    if (modelRef.current) {
      const model = modelRef.current;
      window.addEventListener("featureSelected", featureDemo);
      window.addEventListener("popupclose", closeFeature);

      if (feature == 'View') {
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
        }
        model.rotation.y = -(-1.5 + Math.PI / 2 + 3 / 2);
        model.rotation.x = -1.25 + 2.5 / 2;
        model.position.y = 1;
        const time = clock.getElapsedTime();
        const morphValue = Math.abs(Math.sin(time / 10));
        model.children[0].traverse((child) => {
          if (child.morphTargetInfluences) {
            child.morphTargetInfluences[0] = morphValue;
          }
        });
      } else if (feature.title == 'Zoom') {
        if (controlsRef.current) {
          controlsRef.current.enabled = false;
        }

        model.rotation.x = -1.25 + 2.5 / 2 + Math.PI / 2;
        model.rotation.y = -1.5 - Math.PI / 2 + 3 / 2;
        model.position.y = 0;

        if (isDragging.current) {
          modelRef.current.children[2].rotation.y -= deltaX * 0.0075;
          if (model.children[0].children[1].morphTargetInfluences[0] < 1 && deltaX > 0) {
            model.children[0].children[1].morphTargetInfluences[0] += deltaX * 0.002;
          } else if (model.children[0].children[1].morphTargetInfluences[0] > 0 && deltaX < 0) {
            model.children[0].children[1].morphTargetInfluences[0] += deltaX * 0.002;
          }
          console.log("DeltaX: ", deltaX);
          const zoom = new CustomEvent("ZOOMDemo", {
            detail: model.children[0].children[1].morphTargetInfluences[0]
          });
          window.dispatchEvent(zoom);
        }

        if (!isDragging.current) {
          modelRef.current.children[2].rotation.y = 0;
        }
      } else if (feature.title == 'Media') {
        //console.log("Media Feature");
        if (controlsRef.current) {
          controlsRef.current.enabled = false;
        }

        model.rotation.y = -(-1.5 + Math.PI / 2 + 3 / 2);
        model.rotation.x = -1.25 + 2.5 / 2;
        model.position.y = 1;
      }

      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  });

  return (
    <>
      <directionalLight position={[2, 2, 5]} castShadow intensity={1} />
      <directionalLight position={[-2, 2, -5]} castShadow intensity={1} />
      <directionalLight position={[4, 2, 4]} intensity={1} />
      <ambientLight position={[5, 5, 5]} intensity={1} />

      <primitive
        ref={modelRef}
        object={gltf.scene}
        onClick={(e) => {
          const model = modelRef.current;
          e.stopPropagation();
          const obj = e.object;
          console.log(obj)
          console.log(model)
          if (obj != model.children[0].children[1] && obj.morphTargetInfluences) {
            obj.morphTargetInfluences[0] = obj.morphTargetInfluences[0] === 1 ? 0 : 1;
            if (feature === 'View') {
              const butnprs = new CustomEvent("toggleActiveClass", {
                detail: obj.name
              });
              window.dispatchEvent(butnprs);
            }
            if (feature.title == 'Media') {
              if (obj === model.children[3]) {
                const showmedia = new CustomEvent('ShowMedia');
                window.dispatchEvent(showmedia);
              } else if (obj === model.children[13] || obj === model.children[11]) {
                const chngmedia = new CustomEvent('ChangeMedia', {
                  detail: obj.name
                });
                window.dispatchEvent(chngmedia);
                console.log(obj.name, " event dipatched")
              }
            }
          }
        }}
      />
      <OrbitControls ref={controlsRef} />
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
