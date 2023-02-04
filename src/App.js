import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import "./App.css";


export default function App() {
  return (

    <Canvas id="can" dpr={[1, 2]} camera={{ position: [0, 7, 30], fov: 40 }}>
      <directionalLight position={[10, 10, 0]} intensity={1.5} />
      <directionalLight position={[-10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 20, 0]} intensity={1.5} />
      <directionalLight position={[0, -10, 0]} intensity={0.25} />
      <Model url="stage.glb" />
      <OrbitControls />
    </Canvas>

  );
}

function Model({ url, ...props }) {
  const { scene, animations } = useGLTF(url);
  const can=document.getElementById('can')
  can.style.background = "#EABFFF";
  scene.scale.set(0.4,0.4,0.4);
  scene.rotateX(-0.0872665);
  scene.position.set(0,-2,0);


  let mixer = new THREE.AnimationMixer(scene);
  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });

  console.log(animations);

  mixer.timeScale = 0.5;
  useFrame((state, delta) => {
    mixer.update(delta);
    mixer.setTime(99.9);
  });

  return <primitive object={scene} {...props} />;
}

