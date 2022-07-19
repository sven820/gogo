import * as THREE from "three"
import * as dat from "dat.gui"
import { Color } from "dat.gui"
//轨道控制器
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
//gsap
import gsap from "gsap"

// ----------------------------------------------------------------
// 全屏操作

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
// cube.position.set(5, 0, 0);
//缩放scale
// cube.scale.set(2, 1, 1);
//旋转
cube.rotation.x = -Math.PI/4;

//小素
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);

//webgl渲染内容添加
document.body.appendChild(render.domElement);

//轨道控制器
const controls = new OrbitControls(camera, render.domElement);
//阻尼，需要在render调用update
controls.enableDamping = true;

//添加坐标轴
const axes = new THREE.AxesHelper(50);
scene.add(axes);

// //渲染
// render.render(scene, camera);

//设置动画
var animate1 = gsap.to(cube.position, {
    x: 5, duration: 5, ease: 'none',
    onComplete: () => {
        console.log('onComplete');
    },
    onStart: () => {
        console.log('start');
    },
    repeat: 2, //无限次-1
    yoyo: true, //往返运动
    delay: 1,
});
var animate2 = gsap.to(cube.rotation, {x: 4 * Math.PI, duration: 5, ease: 'none'});

window.addEventListener("dblclick", () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }else {
            render.domElement.requestFullscreen();
        }
    }
)

// 监听画面变化，自适应
window.addEventListener("resize", () => {
    // 更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新投影矩阵
    camera.updateProjectionMatrix();
    // 更新渲染器
    render.setSize(window.innerWidth, window.innerHeight);
    // 更新像素比
    render.setPixelRatio(window.devicePixelRatio);
})

function doRender(){
    controls.update();
    render.render(scene, camera);
    //下一帧重新渲染
    requestAnimationFrame(doRender); //默认传入一个时间参数time
}

doRender();