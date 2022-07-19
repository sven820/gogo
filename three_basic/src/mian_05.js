import * as THREE from "three"
import gsap from "gsap"
import * as dat from "dat.gui"
import { Color } from "dat.gui"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

// ----------------------------------------------------------------
// 3d物体移动缩放旋转 匀速控制 单位时间量

//场景，放东西[]
const scene = new THREE.Scene();
//透视相机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
camera.position.set(10, 10, 10);
scene.add(camera);

//物体
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial(
   {color: 0xffff00,} 
);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);
//位置
cube.position.set(5, 0, 0);
//缩放scale
cube.scale.set(2, 1, 1);
//旋转
cube.rotation.x = -Math.PI/4;

//小素
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);

//webgl渲染内容添加
document.body.appendChild(render.domElement);

//轨道控制器
const controls = new OrbitControls(camera, render.domElement);

//添加坐标轴
const axes = new THREE.AxesHelper(50);
scene.add(axes);

// //渲染
// render.render(scene, camera);

function doRender(time){
    render.render(scene, camera);
    // cube.position.x += 0.01;
    // if (cube.position.x > 10) {
    //     cube.position.x = 0;
    // }
    // cube.rotation.x += 0.01;
    // console.log(time);
    let t = time/1000;
    cube.position.x = t; //匀速移动
    if (cube.position.x >10) {
        cube.position.x = 0;
    }
    //下一帧重新渲染
    requestAnimationFrame(doRender); //默认传入一个时间参数time
}

doRender();