import React, { Children, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import Experience from "./Experience";
import { gsap } from "gsap";

import { useState } from "react";



export default function Model({ url, ...props }) {
  const [pause,usepause]=useState(true)
  const [clamp,useclamp]=useState(false);

    var { scene, animations } = useGLTF(url);
    const can=document.getElementById('can')
    can.style.background = "#EABFFF";
    scene.scale.set(0.4,0.4,0.4);
    // scene.rotateX(-0.0872665);
    scene.position.set(0,-2,0);
    console.log(scene.children)

    //to access children from scene

    // scene.children.forEach((child)=>{
    //   child.children.forEach((asset)=>{
    //     if(asset.name=== "board_text"){
    //       text=asset;
    //     }


    //   })
    // })


    let mixer = new THREE.AnimationMixer(scene);

    animations.forEach((clip) => {

      const action = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
      action.play();
      action.paused=pause;


    });


    



    var Lspeaker = THREE.AnimationUtils.subclip( animations[17], 'run1', 100, 150 );
    var Rspeaker =THREE.AnimationUtils.subclip( animations[16], 'run2', 100, 150 );
    var TextRot =THREE.AnimationUtils.subclip( animations[2], 'rotate', 100, 150 );

    const runAction1 = mixer.clipAction( Lspeaker );
    const runAction2 = mixer.clipAction( Rspeaker );
    const runAction3 = mixer.clipAction( TextRot );


    //inifite animations
    //add cross fade from idleaction after getting precise frame values

    function set(){

      // idleAction1.play();
      // setTimeout( () => {
      //   idleAction1.crossFadeTo( runAction1, 1 );
      // }, 1000 );

      runAction1.play();

      runAction2.play();

      runAction3.play();

      
    }
    if(pause===false){
      setTimeout(set,5500)
    }
  
  
    
  
    mixer.timeScale = 0.5;
    useFrame((state, delta) => {
      
      mixer.update(delta);

      
 
  
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
      scene.rotation.z-=0;

     
  
    })
   


    const experience = new Experience(document.querySelector(".experience-canvas"),scene,animations,pause,usepause);



  
    return <primitive object={scene} {...props} />;
  }