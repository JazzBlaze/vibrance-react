import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import "./App.css";
import { gsap } from "gsap";
import Experience from "./components/Experience";
import UseEffectOnce from "./components/UseEffectOnce"

import Model from "./components/Model";
import ASScroll from "@ashthornton/asscroll";

//for preloader
import Sizes from "./components/Sizes"
import {EventEmitter} from "events"
import convert from "./components/covertDivsToSpans"

export default function App() {
  


  //for gradient headings
  // var el = document.getElementById('elem');
  // const children = el.children;
  // setTimeout(function () {
  //   Array.from(children).forEach(span => {
  //     span.classList.add('gradient-headings')
  //   });
  // }, 4000);

  return (
    
    
    <>
    
      <div className="experience">
        <Canvas  id="can" className="experience-canvas" dpr={[1, 2]} camera={{ position: [0, 7, 30], fov: 40 }} >
          <directionalLight position={[10, 10, 0]} intensity={1.5} />
          <directionalLight position={[-10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, 20, 0]} intensity={1.5} />
          <directionalLight position={[0, -10, 0]} intensity={0.25} />
          
          <Model url="stage.glb" />
          <OrbitControls 
            // minAzimuthAngle={-Math.PI / 25}
            // maxAzimuthAngle={Math.PI / 25}
            // minPolarAngle={Math.PI / 2.5}
            // maxPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </div>
      


      <div id="pre" className="preloader">
        <div className="preloader-wrapper">
          <div className="loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className="page" asscroll-container="true">
        <div className="page-wrapper" asscroll="true">
          
          <section className="hero">
            <div className="hero-wrapper">

              <div className="intro-text">VIBRANCE'23</div>
              <div className="arrow-svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path
                    fill="currentColor"
                    d="M12 14.95q-.2 0-.375-.063-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.925-3.925q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"
                  />
                </svg>
              </div>

              <div className="hero-main">
                <h1 id="elem" className="hero-main-title gradient-headings">VIBRANCE 2023</h1>
                <p className="hero-main-description">Engage.Enthral.Entertain</p>
              </div>



              <div className="hero-second">
                <p className="hero-second-subheading first-sub">Dive In</p>
                <p className="hero-second-subheading second-sub">Deep</p>

                <div className="countdown">
                  <ul>
                    <li>
                      <p id="days" className="hero-main-description">09</p>
                      <p className="hero-main-description">Days</p>
                    </li>
                    <li>
                      <p id="hours" className="hero-main-description">10</p>
                      <p className="hero-main-description">Hours</p>
                    </li>
                    <li>
                      <p id="minutes" className="hero-main-description">60</p>
                      <p className="hero-main-description">Minutes</p>
                    </li>
                    <li>
                      <p id="seconds" className="hero-main-description">50</p>
                      <p className="hero-main-description">Seconds</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="first-move section-margin"></div>

          <section className="first-section section left">
            <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar"></div>
            </div>

            <div className="section-intro-wrapper">
              <h1 className="section-title">
                <span className="section-title-text">About Me</span>
                <div className="section-title-decoration styleOne"></div>
                <div className="section-title-decoration styleTwo"></div>
                <div className="section-title-decoration styleThree"></div>
              </h1>
              <span className="section-number">01</span>
            </div>

            <div className="section-detail-wrapper">

              <p className="section-text">
                Hi there 👋! I'm a third-year digital media student from UK
                currently studying in Germany. My dream is to work for Disney or
                Pixar one day.
              </p>
              <p className="section-text">
                I love creating art and playing with my cats! I also like drinking
                bubble tea and going for hikes! Totally hippie lol ✌️. Welcome to
                my portfolio!
              </p>

            </div>
          </section>

          <div className="second-move section-margin"></div>

          <section className="second-section section right">
            <div className="progress-wrapper progress-bar-wrapper-right">
              <div className="progress-bar blue-background"></div>
            </div>

            <div className="section-intro-wrapper blue-text blue-border">
              <h1 className="section-title blue-text blue-border">
                <span className="section-title-text blue-text">My Work</span>
                <div className="section-title-decoration styleOne blue-border"></div>
                <div className="section-title-decoration styleTwo blue-border"></div>
                <div
                  className="section-title-decoration styleThree blue-background blue-border"
                ></div>
              </h1>
              <span className="section-number blue-text">02</span>
            </div>

            <div className="section-detail-wrapper">
              <h3 className="section-heading">Candycane Village</h3>
              <p className="section-text">
                This project is in progress but it's about a super colorful
                village where the entire world including the people are candies.
                So far the story is that they are set out to explore their "space"
                only to realize it's a human that will try to destroy them.
              </p>
              <h3 className="section-heading">Rebecca's Reddish Radishes</h3>
              <p className="section-text">
                Oh what's that? Why, it's a red radish! Oop, another one! In this
                playful and comedy animation, Rebecca, a young farmer, decided to
                plant radishes for the first time, but there is a big twist!
              </p>
              <h3 className="section-heading">Flora</h3>
              <p className="section-text">
                A heartwarming story about a little orphan girl who tries to find
                her way back home.
              </p>
            </div>
          </section>

          <div className="third-move section-margin"></div>

          <section className="third-section section left">
            <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar green-background"></div>
            </div>

            <div className="section-intro-wrapper green-text green-border">
              <h1 className="section-title green-text green-border">
                <span className="section-title-text green-text">Contact Me</span>
                <div className="section-title-decoration styleOne green-border"></div>
                <div className="section-title-decoration styleTwo green-border"></div>
                <div
                  className="section-title-decoration styleThree green-background green-border"
                ></div>
              </h1>
              <span className="section-number green-text">03</span>
            </div>

            <div className="section-detail-wrapper">
              <h3 className="section-heading">ArtStation</h3>
              <p className="section-text">
                I post all my work here. I don't want to link it yet because I
                want to sort it out a little bit!
              </p>
              <h3 className="section-heading">Instagram</h3>
              <p className="section-text">
                Check out my personal instagram for travel pics and food and
                stuff.
              </p>
              <h3 className="section-heading">LinkedIn</h3>
              <p className="section-text">Career updates and so much more!</p>
            </div>
          </section>
        </div>
      </div>



    </>
    
    

  );
  
}

// function Model({ url, ...props }) {
//   const { scene, animations } = useGLTF(url);
//   const can=document.getElementById('can')
//   can.style.background = "#EABFFF";
//   scene.scale.set(0.4,0.4,0.4);
//   scene.rotateX(-0.0872665);
//   scene.position.set(0,-2,0);

//   const actions = useAnimations(animations)

  

//   let mixer = new THREE.AnimationMixer(scene);
//   animations.forEach((clip) => {
//     const action = mixer.clipAction(clip);
//     action.play();
//   });

//   console.log(animations);

//   mixer.timeScale = 0.5;
//   useFrame((state, delta) => {
//     mixer.update(delta);
//     mixer.setTime(99.9);
//   });

//   var lerp = {
//     current: 0,
//     target: 0,
//     ease: 0.1,
//   };
//   window.addEventListener("mousemove", (e) => {
//     var rotation =
//         ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
//     lerp.target = rotation * 0.05;

//   });
  
//   useFrame( () => {
//     lerp.current = gsap.utils.interpolate(
//       lerp.current,
//       lerp.target,
//       lerp.ease
//     );

  
//     scene.rotation.y= lerp.current;

//   })
 
//   // function animate(){
    
//   //   requestAnimationFrame(animate);
//   //   // mixer.update(clock.getDelta());
//   //   // mixer.setTime(scrollPoint);
//   // }
  
//   // animate();


//   //preloader
//   // var sizes= new Sizes();
//   // const dev= sizes.device;
//   // sizes.on("switchdevice", (device) => {
//   //   dev =device;
//   // });


//   // convert(document.querySelector(".intro-text"));
//   // convert(document.querySelector(".hero-main-title"));
//   // convert(document.querySelectorAll(".hero-main-description"));
//   // convert(document.querySelectorAll(".hero-second-subheading"));
//   // convert(document.querySelector(".second-sub"));
  





  


//   return <primitive object={scene} {...props} />;
// }

