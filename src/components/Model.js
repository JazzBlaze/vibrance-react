import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

import { gsap } from "gsap";




export default function Model({ url, ...props }) {
    const { scene, animations } = useGLTF(url);
    const can=document.getElementById('can')
    can.style.background = "#EABFFF";
    scene.scale.set(0.4,0.4,0.4);
    scene.rotateX(-0.0872665);
    scene.position.set(0,-2,0);
  
    const actions = useAnimations(animations)
    useEffect(()=>{
      console.log(actions);
    })
  
    let mixer = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  
    console.log(animations);
  
    mixer.timeScale = 0.5;
    useFrame((state, delta) => {
      mixer.update(delta);
      mixer.setTime(0);
    });
  
    var lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };
    window.addEventListener("mousemove", (e) => {
      var rotation =
          ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      lerp.target = rotation * 0.05;
  
    });
    
    useFrame( () => {
      lerp.current = gsap.utils.interpolate(
        lerp.current,
        lerp.target,
        lerp.ease
      );
  
    
      scene.rotation.y= lerp.current;
  
    })
   
    // function animate(){
      
    //   requestAnimationFrame(animate);
    //   // mixer.update(clock.getDelta());
    //   // mixer.setTime(scrollPoint);
    // }
    
    // animate();
  
  
    return <primitive object={scene} {...props} />;
  }