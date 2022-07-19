import * as THREE from "three"
import gsap from "gsap"
import * as dat from "dat.gui"
import { Color } from "dat.gui"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

// ----------------------------------------------------------------
// 控制器查看3d物体

//场景，放东西[]
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

//轨道控制器
const controls = new OrbitControls(camera, render.domElement);

//添加坐标轴
const axes = new THREE.AxesHelper(100);
scene.add(axes);

// //渲染
// render.render(scene, camera);

function doRender(){
    render.render(scene, camera);
    //下一帧重新渲染
    requestAnimationFrame(doRender);
}

doRender();