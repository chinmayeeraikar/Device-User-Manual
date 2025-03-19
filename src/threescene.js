// import React, { useEffect, useRef } from 'react';
// import * as three from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';
// //import { objectWorldMatrix } from 'three/src/nodes';
// //import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

// const scene = new three.Scene()
// scene.background = new three.Color(0x87CEEB)
// //const cubegeom = new three.BoxGeometry(0.5,0.5,0.5)
// //const cubematrl = new three.MeshBasicMaterial({color: "red"})
// //const cube = new three.Mesh(cubegeom, cubematrl)

// let mouseX = window.innerWidth/2
// let mouseY = window.innerHeight/2
// let object
// let controls
// let objectTorender = 'Camera'
// let options = {morph:0}

// const loader = new GLTFLoader()
// loader.load(
//     './assets/CameraBkdTex.glb', function(gltf){
//         object = gltf.scene
//         scene.add(object)
//         console.log(object)
//         if (object.children.length > 0) {
//             object.traverse((child) => {
//                 if (child.morphTargetInfluences) {
//                     child.morphTargetInfluences[0] = options.morph;
//                 }
//             })
//         }
//     },
//     function (xhr){
//         console.log((xhr.loaded/xhr.total*100) + '% loaded')
//     },
//     function (error){
//         console.error(error);
//     }
// )

// const light1 = new three.DirectionalLight(0xffffff, 1)
// scene.add(light1)

// const light2 = new three.DirectionalLight(0xffffff, 1)
// scene.add(light2)

// const light3 = new three.DirectionalLight(0xffffff, 1)
// scene.add(light3)

// light1.castShadow = true;
// light2.castShadow = true;
// light1.position.set(2, 2, 5);
// light2.position.set(-2, 2, -5);
// light3.position.set(4, 2, 4)

// const cam = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
// cam.position.z=5
// scene.add(cam)

// const canvas = document.querySelector('canvas.threejs')
// const renderer = new three.WebGLRenderer({canvas: canvas, antialias: true})

// renderer.setSize(window.innerWidth, window.innerHeight)
// const maxPixelRatio = Math.min(window.devicePixelRatio, 2)

// renderer.setPixelRatio(maxPixelRatio)
// renderer.setAnimationLoop( animate )

// if(objectTorender == 'Camera'){
//     controls = new OrbitControls (cam, renderer.domElement)
// }

// let time = 0

// function animate(){
//     time += 0.01
//     if(object && objectTorender == 'Camera'){
//         object.rotation.y = -(-1.5 + 3.1415/2 + mouseX / window.innerWidth * 3);
//         object.rotation.x = -1.25 + mouseY*2.5 / window.innerHeight;
//         object.position.z = 1
//         //console.log(object.rotation.x, object.rotation.y)
//         // options.morph = Math.abs(Math.sin(time/100))
//         // object.children[0].traverse((child) => {
//         //     if(child.morphTargetInfluences){
//         //         child.morphTargetInfluences[0] = options.morph
//         //     }
//         // })
//     }
//     requestAnimationFrame(animate)
//     renderer.render(scene, cam);
// }

// // //Raycaster
// const raycaster = new three.Raycaster();
// const pointer = new three.Vector2();

// function MouseClick( event : MouseEvent ) {

//   // calculate pointer position in normalized device coordinates
//   // (-1 to +1) for both components

//   pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
//   pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

//     //console.log(pointer.x, pointer.y)

//     raycaster.setFromCamera( pointer, cam );

//   // calculate objects intersecting the picking ray
//   const intersects = raycaster.intersectObjects( object.children );

//     const obj = intersects[0].object
//     if(obj!=object.children[0] && obj!=object.children[1] && obj !=object.children[2]){
//         if(obj.morphTargetInfluences){
//             if(obj.morphTargetInfluences[0] != 1){
//                 obj.morphTargetInfluences[0] = 1;
//             }
//             else if(obj.morphTargetInfluences[0] = 1){
//                 obj.morphTargetInfluences[0] = 0;
//             }
//             console.log(intersects[0].object.name, 'Pressed')
//         }
//     }

//   // for ( let i = 0; i < intersects.length; i ++ ) {
//     //     console.log('Button Pressed')
//   // 	//intersects[ i ].object.material.color.set( 0xff0000 );

//   // }

//   renderer.render( scene, cam );

// }

// window.addEventListener("mouse", onkeydown);
// window.addEventListener("click", MouseClick);

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

// interface ThreeSceneProps {
//   objectToRender?: string;
// }

// const ThreeScene: React.FC<ThreeSceneProps> = ({
//   objectToRender = "Camera",
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x87ceeb);

//     // Variables
//     let mouseX: number = window.innerWidth / 2;
//     let mouseY: number = window.innerHeight / 2;
//     let object: THREE.Group | undefined;
//     let controls: OrbitControls | undefined;
//     let options: { morph: number } = { morph: 0 };

//     // Camera setup
//     const cam = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       30
//     );
//     cam.position.z = 5;
//     scene.add(cam);

//     // Renderer setup
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
//     renderer.setPixelRatio(maxPixelRatio);

//     // Lights
//     const light1 = new THREE.DirectionalLight(0xffffff, 1);
//     const light2 = new THREE.DirectionalLight(0xffffff, 1);
//     const light3 = new THREE.DirectionalLight(0xffffff, 1);

//     scene.add(light1);
//     scene.add(light2);
//     scene.add(light3);

//     light1.castShadow = true;
//     light2.castShadow = true;
//     light1.position.set(2, 2, 5);
//     light2.position.set(-2, 2, -5);
//     light3.position.set(4, 2, 4);

//     // GLTF Loader
//     const loader = new GLTFLoader();
//     loader.load(
//       "./assets/CameraBkdTex.glb",
//       function (gltf) {
//         object = gltf.scene;
//         scene.add(object);
//         console.log(object);
//         if (object.children.length > 0) {
//           object.traverse((child) => {
//             if ((child as THREE.Mesh).morphTargetInfluences) {
//               (child as THREE.Mesh).morphTargetInfluences![0] = options.morph;
//             }
//           });
//         }
//       },
//       function (xhr) {
//         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//       },
//       function (error) {
//         console.error(error);
//       }
//     );

//     // Controls
//     if (objectToRender === "Camera") {
//       controls = new OrbitControls(cam, renderer.domElement);
//     }

//     // Raycaster setup
//     const raycaster = new THREE.Raycaster();
//     const pointer = new THREE.Vector2();

//     // Animation
//     let time = 0;
//     function animate() {
//       time += 0.01;
//       if (object && objectToRender === "Camera") {
//         object.rotation.y = -(
//           -1.5 +
//           3.1415 / 2 +
//           (mouseX / window.innerWidth) * 3
//         );
//         object.rotation.x = -1.25 + (mouseY * 2.5) / window.innerHeight;
//         object.position.z = 1;
//       }
//       requestAnimationFrame(animate);
//       renderer.render(scene, cam);
//     }

//     // Events
//     function handleMouseClick(event: MouseEvent) {
//       // Calculate pointer position in normalized device coordinates
//       pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//       pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

//       if (object) {
//         raycaster.setFromCamera(pointer, cam);
//         // Calculate objects intersecting the picking ray
//         const intersects = raycaster.intersectObjects(object.children);

//         if (intersects.length > 0) {
//           const obj = intersects[0].object;
//           if (
//             obj !== object.children[0] &&
//             obj !== object.children[1] &&
//             obj !== object.children[2]
//           ) {
//             const mesh = obj as THREE.Mesh;
//             if (mesh.morphTargetInfluences) {
//               if (mesh.morphTargetInfluences[0] !== 1) {
//                 mesh.morphTargetInfluences[0] = 1;
//               } else if (mesh.morphTargetInfluences[0] === 1) {
//                 mesh.morphTargetInfluences[0] = 0;
//               }
//               console.log(intersects[0].object.name, "Pressed");
//             }
//           }
//         }
//       }

//       renderer.render(scene, cam);
//     }

//     function handleKeyDown(event: KeyboardEvent) {
//       // Handle key down events if needed
//     }

//     function handleMouseMove(event: MouseEvent) {
//       mouseX = event.clientX;
//       mouseY = event.clientY;
//     }

//     // Start animation
//     renderer.setAnimationLoop(animate);

//     // Add event listeners
//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("click", handleMouseClick);
//     window.addEventListener("mousemove", handleMouseMove);

//     // Cleanup
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("click", handleMouseClick);
//       window.removeEventListener("mousemove", handleMouseMove);
//       renderer.setAnimationLoop(null);
//       if (controls) controls.dispose();
//     };
//   }, [objectToRender]);

//   return <canvas ref={canvasRef} className="threejs" />;
// };

// export default ThreeScene;


import * as three from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


const scene = new three.Scene()
scene.background = new three.Color(0x87CEEB)

let mouseX = window.innerWidth/2
let mouseY = window.innerHeight/2
let object
let controls
let objectTorender = 'Camera'
let options = {morph:0}

export const loader = new GLTFLoader()
loader.load(
    './assets/CameraBkdTex.glb', function(gltf){
        object = gltf.scene
        scene.add(object)
        console.log(object)
        if (object.children.length > 0) {
            object.traverse((child) => {
                if (child.morphTargetInfluences) {
                    child.morphTargetInfluences[0] = options.morph;
                }
            })
        }
    },
    function (xhr){
        console.log((xhr.loaded/xhr.total*100) + '% loaded')
    },
    function (error){
        console.error(error);
    }
)

const light1 = new three.DirectionalLight(0xffffff, 1)
scene.add(light1)

const light2 = new three.DirectionalLight(0xffffff, 1)
scene.add(light2)

const light3 = new three.DirectionalLight(0xffffff, 1)
scene.add(light3)

light1.castShadow = true;
light2.castShadow = true;
light1.position.set(2, 2, 5);
light2.position.set(-2, 2, -5);
light3.position.set(4, 2, 4)

const cam = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
cam.position.z=5
//scene.add(cube)
scene.add(cam)

const canvas = document.querySelector('canvas.threejs')
const renderer = new three.WebGLRenderer({canvas: canvas, antialias: true})

renderer.setSize(window.innerWidth, window.innerHeight)
const maxPixelRatio = Math.min(window.devicePixelRatio, 2) 

renderer.setPixelRatio(maxPixelRatio)
renderer.setAnimationLoop( animate )

if(objectTorender == 'Camera'){
    controls = new OrbitControls (cam, renderer.domElement)
}

let time = 0

function animate(){
    time += 0.01
    if(object && objectTorender == 'Camera'){
        object.rotation.y = -1.5 + 3.1415/2 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.25 + mouseY*2.5 / window.innerHeight;
        //console.log(object.rotation.x, object.rotation.y)
        options.morph = Math.abs(Math.sin(time/100))
        object.children[0].traverse((child) => {
            if(child.morphTargetInfluences){
                child.morphTargetInfluences[0] = options.morph
            }
        })        
    }
    requestAnimationFrame(animate)
    renderer.render(scene, cam);
}



// //Raycaster
const raycaster = new three.Raycaster();
const pointer = new three.Vector2();

function MouseClick( event ) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    //console.log(pointer.x, pointer.y)

    raycaster.setFromCamera( pointer, cam );

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( object.children );

    //console.log(intersects[0].object.name)
    const obj = intersects[0].object
    if(obj!=object.children[0] && obj!=object.children[1] && obj !=object.children[2]){
        if(obj.morphTargetInfluences){
            intersects[0].object.morphTargetInfluences[0] = 1;
            console.log(intersects[0].object.name, 'Pressed')
            //intersects[0].object.morphTargetInfluences[0] = 0;
        }
    }
    //else if()

    // for ( let i = 0; i < intersects.length; i ++ ) {
    //     console.log('Button Pressed')
    // 	//intersects[ i ].object.material.color.set( 0xff0000 );

    // }

    renderer.render( scene, cam );

}

window.addEventListener("mouse", onkeydown);
window.addEventListener("click", MouseClick);