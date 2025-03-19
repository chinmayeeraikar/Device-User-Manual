import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


interface ThreeSceneProps {
  modelPath?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ modelPath = './assets/CameraBkdTex.glb' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);

    // Mouse tracking
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Object and control variables
    let object: THREE.Group;
    let controls: OrbitControls;
    const options = { morph: 0 };

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf: GLTF) => {
        object = gltf.scene;
        scene.add(object);

        if (object.children.length > 0) {
          object.traverse((child) => {
            if ('morphTargetInfluences' in child) {
              child.morphTargetInfluences[0] = options.morph;
            }
          });
        }
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error(error);
      }
    );

    // Lights
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    const light3 = new THREE.DirectionalLight(0xffffff, 1);

    scene.add(light1);
    scene.add(light2);
    scene.add(light3);

    light1.castShadow = true;
    light2.castShadow = true;
    light1.position.set(2, 2, 5);
    light2.position.set(-2, 2, -5);
    light3.position.set(4, 2, 4);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      30
    );
    camera.position.z = 5;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(maxPixelRatio);

    // Controls
    //controls = new OrbitControls(camera, renderer.domElement);

    // Raycaster for interactions
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handleMouseClick = (event: MouseEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);

      if (object) {
        const intersects = raycaster.intersectObjects(object.children);

        if (intersects.length > 0 &&
          'morphTargetInfluences' in intersects[0].object) {
          intersects[0].object.morphTargetInfluences![0] = 1;
          
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if(drag = true){
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
    };

    let drag = false
    const mmove = (event: MouseEvent) =>{
      drag = true
    }

    // Animation
    const animate = () => {
      if (object) {
        object.rotation.y = -1.5 + 3.1415 / 2 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.25 + mouseY * 2.5 / window.innerHeight;
      }

      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('click', handleMouseClick);
    window.addEventListener('mousedown', handleMouseMove);

    // Start animation loop
    renderer.setAnimationLoop(animate);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('mousedown', handleMouseMove);
      window.removeEventListener('mousemove', mmove);
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
    };
  }, [modelPath]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeScene;