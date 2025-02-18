import * as three from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
//import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const scene = new three.Scene()
scene.background = new three.Color(0x87CEEB)
//const cubegeom = new three.BoxGeometry(0.5,0.5,0.5)
//const cubematrl = new three.MeshBasicMaterial({color: "red"})
//const cube = new three.Mesh(cubegeom, cubematrl)

let mouseX = window.innerWidth/2
let mouseY = window.innerHeight/2
let object
let controls
let objectTorender = 'Camera'
let options = {morph:0}

const loader = new GLTFLoader()
loader.load(
    './assets/Camera.glb', function(gltf){
        object = gltf.scene
        scene.add(object)
        console.log(gltf.scene)
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

console.log(window.devicePixelRatio)

if(objectTorender == 'Camera'){
    controls = new OrbitControls (cam, renderer.domElement)
}

let time = 0

function animate(){
    time += 0.01
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    if(object && objectTorender == 'Camera'){
        object.rotation.y = -1.5 + 3.1415/2 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.25 + mouseY*2.5 / window.innerHeight;
        options.morph = Math.abs(Math.sin(time/100))
        object.traverse((child) => {
            if(child.morphTargetInfluences){
                child.morphTargetInfluences[0] = options.morph
            }
        })
        //object.morphTargetInfluences = Math.abs(Math.sin(time));
    }
    requestAnimationFrame(animate)
    renderer.render(scene, cam);
}


window.addEventListener("mouse", onkeydown);