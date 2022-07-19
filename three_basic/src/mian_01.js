import * as THREE from "three"
import gsap from "gsap"
import * as dat from "dat.gui"
import { Color } from "dat.gui"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"


// ----------------------------------------------------------------
// 基本流程

//场景，放东西
const scene = new THREE.Scene();
//透视相机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 10);
scene.add(camera);

//物体
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial(
   {color: 0xffff00,} 
);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

//渲染器
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);

//webgl渲染内容添加
document.body.appendChild(render.domElement);

//渲染
render.render(scene, camera);
