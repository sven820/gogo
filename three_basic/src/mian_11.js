import * as THREE from "three"
import * as dat from "dat.gui"
import { Color } from "dat.gui"
//轨道控制器
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
//gsap
import gsap from "gsap"

// ----------------------------------------------------------------
// 材质 纹理题图 

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

//导入纹理
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./texture/minecraft.webp");
const alphaTexture = textureLoader.load(); //透明纹理，黑透明，白不透明，灰

// texture.offset.set(0.5, 0.5);
// texture.center.set(0.5, 0.5);
// texture.rotation = Math.PI / 4;
// 纹理重复次数
// texture.repeat.set(2,3);
// 纹理重复模式
// texture.wrapS = THREE.MirroredRepeatWrapping; //水平方向
// texture.wrapT = THREE.RepeatWrapping; //垂直方向
texture.minFilter = THREE.LinearFilter; //默认
texture.maxFilter = THREE.LinearFilter; //

// 添加物体1
const cubeGeometry = new THREE.BoxBufferGeometry(1,1,1);
const basicMaterial = new THREE.MeshBasicMaterial(
    {
        color: "#ffffff", 
        map: texture,
        // alphaTexture: alphaTexture, //需要切图黑白遮罩才有效果
        transparent: true,
        opacity: 1,
        // aoMap: texture.aoMap //环境遮挡贴图
        // side: THREE.DoubleSide, //渲染哪一面
    },
);
const cube = new THREE.Mesh(cubeGeometry, basicMaterial);
scene.add(cube);

const texture2 = textureLoader.load("./texture/minecraft.webp");
//纹理显示算法
texture2.minFilter = THREE.NearestFilter; //默认线性插值，模糊，near这种则像素化感觉
texture2.magFilter = THREE.NearestFilter;
// 添加物体2
const cubeGeometry2 = new THREE.BoxBufferGeometry(1,1,1);
const basicMaterial2 = new THREE.MeshBasicMaterial(
    {color: "#ffffff", map: texture2}
);
const cube2 = new THREE.Mesh(cubeGeometry2, basicMaterial2);
scene.add(cube2);
cube2.position.set(0, 1,0);

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