import React, { Children, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import Experience from "./Experience";
import { gsap } from "gsap";

import { useState } from "react";



export default function Model({ url, ...props }) {

 


 

  const [pause,usepause]=useState(true)
  const [lerpdisabley,uselerpdisable]=useState(0);
  const[rotatex,userotatex]=useState(0);
  const[rotatez,userotatez]=useState(0);


    var { scene, animations } = useGLTF(url);

    
    scene.scale.set(0.4,0.4,0.4);
    // scene.rotateX(-0.0872665);
    scene.position.set(0,-2,0);
    console.log(scene.children)

    //to access children from scene
    var text;
    scene.children.forEach((child)=>{
      child.children.forEach((asset)=>{

        if(asset.name=== "display_box"){
          text=asset;
        }


      })
    })
    const texture = new THREE.TextureLoader().load( "vibrance.svg" );
    // text.material = new THREE.MeshBasicMaterial({
    //   map: texture,
    // });
    let mixer = new THREE.AnimationMixer(scene);

    animations.forEach((clip) => {

      const action = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
      action.play();
      action.paused=pause;


    });


    console.log(animations)



    var Lspeaker = THREE.AnimationUtils.subclip( animations[17], 'run1', 100, 150 );
    var Rspeaker =THREE.AnimationUtils.subclip( animations[16], 'run2', 100, 150 );
    var TextRot =THREE.AnimationUtils.subclip( animations[2], 'rotate', 105, 150 );
    const runAction1 = mixer.clipAction( Lspeaker );
    const runAction2 = mixer.clipAction( Rspeaker );
    const runAction3 = mixer.clipAction( TextRot );


    //inifite animationsq
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
    //menu
    const menuBtn = document.querySelector(".menu-div");

    const exitBtn = document.querySelector(".exit");

    let t1 = gsap.timeline({ paused: true });
    t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: "power2.inOut" });
    t1.to(
        ".nav",
        {
            opacity: 1,
            marginBottom: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.3,
        },
        ">-0.5"
    );

    menuBtn.addEventListener("click", () => {
        t1.play().timeScale(1);
    });

    exitBtn.addEventListener("click", () => {
        t1.timeScale(2.5);
        t1.reverse();
    });

    //section text slider
    // window.addEventListener('mousemove', handleMouseMove);
    // window.addEventListener('resize', handleWindowResize);

    // const spansSlow = document.querySelectorAll('.spanSlow');
    // const spansFast = document.querySelectorAll('.spanFast');

    // let width = window.innerWidth;

    // function handleMouseMove(e) {
    //   let normalizedPosition = e.pageX / (width/2) - 1;
    //   let speedSlow = 100 * normalizedPosition;
    //   let speedFast = 200 * normalizedPosition;
    //   spansSlow.forEach((span) => {
    //     span.style.transform = `translate(${speedSlow}px)`;
    //   });
    //   spansFast.forEach((span) => {
    //     span.style.transform = `translate(${speedFast}px)`
    //   })
    // }
    // //we need to recalculate width when the window is resized
    // function handleWindowResize() {
    //   width = window.innerWidth;
    // }
   


    const experience = new Experience(document.querySelector(".experience-canvas"),scene,animations,pause,usepause,userotatex,userotatez,uselerpdisable);



  
    return <primitive object={scene} {...props} />;
  }