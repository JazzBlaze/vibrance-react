import React, { Children, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
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


    var { scene, animations  } = useGLTF(url);


    // scene.rotateX(-0.0872665);
    scene.position.set(0,-2,0);
 

    //to access children from scene
    var text,disp,splane1,splane2;
    scene.children.forEach((child)=>{
      child.children.forEach((asset)=>{
        console.log(asset.name);
        // asset.visible=false;

        // ["stage","Mic","trusses","trusses001","trusses002","trusses003","trusstopfront","trusstopfront001","display", "Display_bar","display_box","stage","stairs1","stairs1001","board_back"].forEach(e => {
        //   if (asset.name === e) {
        //     asset.visible = true;
        //   }

        // })
        if(asset.name=== "display"){
          disp=asset;
        }
        if(asset.name=== "board_text"){
          asset.visible=false;
          text=asset;
        }
        if(asset.name=== "sparkler_planeL"){
          splane1=asset;
        }
        if(asset.name=== "sparkler_planeR"){
          splane2=asset;
        }
      })
    })

    // for video textures


    const video2=document.createElement("video");
    video2.src = "1.mp4";
    video2.muted = true;
    video2.playsInline = true;
    video2.autoplay = true;
    video2.loop = true;
    video2.play();
    const videoTexture1 = new THREE.VideoTexture(
      video2
    );
    videoTexture1.minFilter = THREE.NearestFilter;
    videoTexture1.magFilter = THREE.NearestFilter;
    videoTexture1.generateMipmaps = false;
    videoTexture1.flipY = false;
    videoTexture1.encoding = THREE.sRGBEncoding;
    disp.material = new THREE.MeshBasicMaterial({
      map: videoTexture1
    });


    const video= document.createElement("video");
    video.src = "flames_w_alpha.webm";
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;
    video.play();
    const videoTexture = new THREE.VideoTexture(
        video
    );
    videoTexture.flipY = false;

    videoTexture.format=THREE.RGBAFormat;

    videoTexture.minFilter = THREE.NearestFilter;
    videoTexture.magFilter = THREE.NearestFilter;
    videoTexture.generateMipmaps = false;
    splane1.material = new THREE.MeshBasicMaterial({
      map: videoTexture, transparent:true
    });
    splane2.material = new THREE.MeshBasicMaterial({
      map: videoTexture, transparent:true
    });
    splane1.visible=false;
    splane2.visible=false;
    // const texture = new THREE.TextureLoader().load( "vibrance.svg" );
    // text.material = new THREE.MeshBasicMaterial({
    //   map: texture,
    // });
    let mixer = new THREE.AnimationMixer(scene);

    const dont = new Set([2,3,8,9,10,11,12,13,14,15,21,22,23,24,25,26]);
    for (let i = 0; i < animations.length; i++) {
      
        if(!(dont.has(i))){

          const action = mixer.clipAction(animations[i]);
          action.clampWhenFinished = true;
          action.loop = THREE.LoopOnce;
          action.play();
          action.paused=pause;
        }
      
    }

    // animations.forEach((clip) => {
    //   if(animations[0]===clip){
    //     console.log(true)
    //   }
    //   if (clip.name!=="board_text"){
    //     const action = mixer.clipAction(clip);
    //     action.clampWhenFinished = true;
    //     action.loop = THREE.LoopOnce;
    //     action.play();
    //     action.paused=pause;
    // }

    // });


    console.log(animations)


    //infinite looping clips
    var Lspeaker = THREE.AnimationUtils.subclip( animations[23], 'run1', 100, 180 );
    var Rspeaker =THREE.AnimationUtils.subclip( animations[24], 'run2', 100, 180 );
    
    var Lam1 =THREE.AnimationUtils.subclip( animations[11], 'Lamp', 100, 180 );
    var Lam2 =THREE.AnimationUtils.subclip( animations[12], 'Lamp', 100, 180 );
    var Lam3 =THREE.AnimationUtils.subclip( animations[13], 'Lamp', 100, 180 );
    var Lam4 =THREE.AnimationUtils.subclip( animations[14], 'Lamp', 100, 180 );
    var Lam5 =THREE.AnimationUtils.subclip( animations[15], 'Lamp', 100, 180 );


    const Lspeak = mixer.clipAction( Lspeaker );
    const Rspeak = mixer.clipAction( Rspeaker );
    
    const l1 = mixer.clipAction( Lam1 );
    const l2 = mixer.clipAction( Lam2 );
    const l3 = mixer.clipAction( Lam3 );
    const l4 = mixer.clipAction( Lam4 );
    const l5 = mixer.clipAction( Lam5 );



    /**
     * Exposing 3D model objects to the window
     */
    const board_text = mixer.clipAction( animations[2] );
    board_text.loop=THREE.LoopRepeat;
    board_text.clampWhenFinished = false;
    const Cable1=mixer.clipAction(animations[3]);
    const Drumkit=mixer.clipAction(animations[8]);
    const guitar=mixer.clipAction(animations[9]);
    const keyboard=mixer.clipAction(animations[10]);
    const lamp1=mixer.clipAction(animations[11]);
    const lamp2=mixer.clipAction(animations[12]);
    const lamp3=mixer.clipAction(animations[13]);
    const lamp4=mixer.clipAction(animations[14]);
    const lamp5=mixer.clipAction(animations[15]);
    const speaker_topL=mixer.clipAction(animations[21]);
    const speaker_topR=mixer.clipAction(animations[22]);
    const speakerL=mixer.clipAction(animations[23]);
    const speakerR=mixer.clipAction(animations[24]);
    const speakersmallL=mixer.clipAction(animations[25]);
    const speakersmallR=mixer.clipAction(animations[26]);


    window.modelObjects = {
      guitar: guitar,
      board_text: board_text,
      Cable1:Cable1,
      Drumkit:Drumkit,
      keyboard:keyboard,
      lamp1:lamp1,
      lamp2:lamp2,
      lamp3:lamp3,
      lamp4:lamp4,
      lamp5:lamp5,
      speaker_topL:speaker_topL,
      speaker_topR:speaker_topR,
      speakerL:speakerL,
      speakerR:speakerR,
      speakersmallL:speakersmallL,
      speakersmallR:speakersmallR,
      //inifinte looping
      l1:l1,
      l2:l2,
      l3:l3,
      l4:l4,
      l5:l5,
      Lspeak:Lspeak,
      Rspeak:Rspeak,
    };


    function textplay(){
      text.visible=true;
      window.modelObjects.board_text.play();
      window.modelObjects.speakersmallL.play();
      window.modelObjects.speakersmallL.loop=THREE.LoopOnce;
      window.modelObjects.speakersmallL.clampWhenFinished = true;

      window.modelObjects.speakersmallR.play();
      window.modelObjects.speakersmallR.loop=THREE.LoopOnce;
      window.modelObjects.speakersmallR.clampWhenFinished = true;

      
    }
    if(pause===false){
      setTimeout(textplay,4500)
    }


    mixer.timeScale = 0.8;
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
    // const menuBtn = document.querySelector(".menu-div");
    // const exitBtn = document.querySelector(".exit");
    // let t1 = gsap.timeline({ paused: true });
    // t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: "power2.inOut" });
    // t1.to(
    //     ".nav",
    //     {
    //         opacity: 1,
    //         marginBottom: 0,
    //         duration: 0.4,
    //         ease: "power2.inOut",
    //         stagger: 0.2,
    //     },
    //     ">-0.5"
    // );

    // menuBtn.addEventListener("click", () => {
    //     t1.play().timeScale(1);
    // });

    // exitBtn.addEventListener("click", () => {
    //     t1.timeScale(2.5);
    //     t1.reverse();
    // });

    const experience = new Experience(document.querySelector(".experience-canvas"),scene,animations,pause,usepause,userotatex,userotatez,uselerpdisable);
  
    
      

      useThree(({camera}) => {
        const sec1_t2=  new gsap.timeline();
        experience.preloader.on('sec1-t2', () => sec1_t2
          .to(camera.position,
            {  
                x: 0,
                y: 7,
                z: 30,
                duration:0,
      
                onComplete: () => {
                  window.modelObjects.speaker_topL.play();
                  window.modelObjects.speaker_topL.loop=THREE.LoopOnce;
                  window.modelObjects.speaker_topL.clampWhenFinished = true;

                  window.modelObjects.speaker_topR.play();
                  window.modelObjects.speaker_topR.loop=THREE.LoopOnce;
                  window.modelObjects.speaker_topR.clampWhenFinished = true;

                  window.modelObjects.lamp1.play();
                  window.modelObjects.lamp1.loop=THREE.LoopOnce;
                  window.modelObjects.lamp1.clampWhenFinished = true;
                  window.modelObjects.l1.play();

                  window.modelObjects.lamp2.play();
                  window.modelObjects.lamp2.loop=THREE.LoopOnce;
                  window.modelObjects.lamp2.clampWhenFinished = true;
                  window.modelObjects.l2.play();

                  window.modelObjects.lamp2.play();
                  window.modelObjects.lamp2.loop=THREE.LoopOnce;
                  window.modelObjects.lamp2.clampWhenFinished = true;
                  window.modelObjects.l2.play();

                  window.modelObjects.lamp3.play();
                  window.modelObjects.lamp3.loop=THREE.LoopOnce;
                  window.modelObjects.lamp3.clampWhenFinished = true;
                  window.modelObjects.l3.play();

                  window.modelObjects.lamp4.play();
                  window.modelObjects.lamp4.loop=THREE.LoopOnce;
                  window.modelObjects.lamp4.clampWhenFinished = true;
                  window.modelObjects.l4.play();

                  window.modelObjects.lamp5.play();
                  window.modelObjects.lamp5.loop=THREE.LoopOnce;
                  window.modelObjects.lamp5.clampWhenFinished = true;
                  window.modelObjects.l5.play();
            
            }
            }
        ))


        const sec3_t2= new gsap.timeline();
        experience.preloader.on('sec3-t2', () => sec3_t2

          .to(
                        
            camera.position,
            {   
                x: 0,
                y: 7,
                z: 30,
                duration:0,
                onComplete:()=>{
                  window.modelObjects.Drumkit.play();
                  window.modelObjects.Drumkit.loop=THREE.LoopOnce;
                  window.modelObjects.Drumkit.clampWhenFinished = true;

                  window.modelObjects.guitar.play();
                  window.modelObjects.guitar.loop=THREE.LoopOnce;
                  window.modelObjects.guitar.clampWhenFinished = true;
                }
              
            }

        
          )

        )

        const sec4_t2= new gsap.timeline();
        experience.preloader.on('sec4-t2', () => sec4_t2

          .to(
                        
            camera.position,
            {   
                x: 0,
                y: 7,
                z: 30,
                duration:0,
                onComplete:()=>{
                  window.modelObjects.speakerL.play();
                  window.modelObjects.speakerL.loop=THREE.LoopOnce;
                  window.modelObjects.speakerL.clampWhenFinished = true;
                  window.modelObjects.Lspeak.play();

                  window.modelObjects.speakerR.play();
                  window.modelObjects.speakerR.loop=THREE.LoopOnce;
                  window.modelObjects.speakerR.clampWhenFinished = true;
                  window.modelObjects.Rspeak.play();

                  splane1.visible=true
                  splane2.visible=true

                }
              
            }

        
          )

        )

      });

      
    

    return <primitive object={scene} {...props} />;
  }