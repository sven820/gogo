import * as THREE from "three"
import * as dat from "dat.gui"
import { Color } from "dat.gui"
//轨道控制器
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
//gsap
import gsap from "gsap"

// ----------------------------------------------------------------
// 图形界面调试变量

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

// 图形界面调试变量
let gui = new dat.GUI();
// progress value
gui.add(cube.position, "x")
    .min(0).max(10)
    .step(0.5)
    .name("x坐标")
    .onChange((v) => {
        console.log(v);
    })
    .onFinishChange((v) => {

    });

let animate = null;
let params = {
    color:"#ffff00",
    startAnimate: ()=>{
        if (animate) {
            animate.play();
            return;
        }
        animate = gsap.to(cube.position, {
            x: 5, duration: 5, ease: 'none',
            repeat: 2, //无限次-1
            yoyo: true, //往返运动
            delay: 0,
        });
    },
    stopAnimate: ()=> {
        animate.pause();
    }
}
//颜色面板
gui.addColor(params, "color").onChange((v) => {
    cube.material.color.set(v);
})
//选项框
gui.add(cube, "visible").name("visible");
let folder = gui.addFolder("动画");
//按钮
folder.add(params, "startAnimate");
folder.add(params, "stopAnimate");
//线框模式
gui.add(cube.material, "wireframe");


function doRender(){
    controls.update();
    render.render(scene, camera);
    //下一帧重新渲染
    requestAnimationFrame(doRender); //默认传入一个时间参数time
}

doRender();