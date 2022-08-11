import * as THREE from "three"
import * as dat from "dat.gui"
import { Color } from "dat.gui"
//轨道控制器
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
//gsap
import gsap from "gsap"

// ----------------------------------------------------------------
// 几何体

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

for (let i = 0; i <50; i++) {
    const geometry = new THREE.BufferGeometry();
    const arr = new Float32Array(9);
    for(let j = 0; j < 9; j++) {
        arr[j] = Math.floor(Math.random() * 10-5); //Math.random() 0~1的值
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    let color = new THREE.Color(Math.random(), Math.random(), Math.random());
    const material = new THREE.MeshBasicMaterial(
        {color: color, transparent: true, opacity: Math.random()}
    );
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

//render
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

function doRender(){
    controls.update();
    render.render(scene, camera);
    //下一帧重新渲染
    requestAnimationFrame(doRender); //默认传入一个时间参数time
}

doRender();