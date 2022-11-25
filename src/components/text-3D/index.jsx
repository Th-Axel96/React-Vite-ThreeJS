import { useEffect } from "react";

import * as THREE from "three";

import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import SceneInit from "../lib/SceneInit";

export const Text3D = () => {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas3");
    test.initialize();
    test.animate();

    // part 0 - comment out template code
    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    // part 1 - typeface.json font loader
    const fontLoader = new FontLoader();
    fontLoader.load(
      "../../../node_modules/three/examples/fonts/droid/droid_sans_regular.typeface.json",
      (droidFont) => {
        const textGeometry = new TextGeometry("Hello World", {
          size: 20,
          height: 50,
          font: droidFont,
        });
        const textMaterial = new THREE.MeshNormalMaterial();
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.x = -40;
        textMesh.position.y = 0;
        textMesh.rotation.x = 0.5;
        test.scene.add(textMesh);
      }
    );

    // part 2 - true type font loader
    // const ttfLoader = new TTFLoader();
    // ttfLoader.load("fonts/jet_brains_mono_regular.ttf", (json) => {
    //   // First parse the font.
    //   const jetBrainsFont = fontLoader.parse(json);
    //   // Use parsed font as normal.
    //   const textGeometry = new TextGeometry("hello world", {
    //     height: 2,
    //     size: 10,
    //     font: jetBrainsFont,
    //   });
    //   const textMaterial = new THREE.MeshNormalMaterial();
    //   const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    //   textMesh.position.x = -46;
    //   textMesh.position.y = -10;
    // test.scene.add(textMesh);
    // });
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas3" />
    </div>
  );
};
