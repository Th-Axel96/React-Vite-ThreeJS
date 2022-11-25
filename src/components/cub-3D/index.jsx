import { useEffect } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export const Cub3D = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      3,
      1000
    );
    camera.position.z = 156;

    const canvas = document.getElementById("myThreeJsCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -50;
    scene.add(boxMesh);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // add orbit controls.
    const controls = new OrbitControls(camera, renderer.domElement);

    // add FPS stats.
    const stats = Stats();
    document.body.appendChild(stats.dom);

    const animate = () => {
      boxMesh.rotation.x += 0.005;
      boxMesh.rotation.y += 0.005;
      torusKnot.rotation.y += 0.05;

      stats.update();
      controls.update();
      renderer.render(scene, camera);

      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <div className="flex justify-center text-red-500">
        <h1>Hello World React with Three.Js</h1>
      </div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};
