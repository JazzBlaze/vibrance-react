import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";

import Menu from "./components/Menu";
import Model from "./components/Model";
import SvgComponent from "./components/SvgComponent";
import as from "./images/Vitangle.gif"
// import "./fonts/FredokaOne.ttf"
// import "./fonts/NaughtyMonster.ttf"
import "./App.css";
import Stats from "./components/Stats";
import "./components/counter";
import SecTitle from "./components/SecTitle"

import svg from "./images/vibrance1.png"
import team1 from "./images/team1.jpg"
import team2 from "./images/team2.jpg"
import team3 from "./images/team3.jpg"
import team4 from "./images/team4.jpg"
import insta from "./images/instagram.svg"
import yout from "./images/youtube.svg"

import TeamCard from "./components/TeamCard";
import Button from "./components/Button";
export default function App() {
 
  return (
   

    <>

    
      <div className="experience">
      
        
        <Canvas id="can" className="experience-canvas" dpr={[1, 2]} camera={{ position: [0, 7, 30], fov: 40 }} >

          <ambientLight  color="#484D64" intensity={1.5} />
          {/* <directionalLight castShadow="true" position={[26.381, -6.93, 19.768]} intensity={3} /> */}
          <pointLight  color="#B6F6FF" castShadow="true" position={[0,22,0]} intensity={1}/>
          <pointLight color="#C796CC" castShadow="true" position={[24,20,24]} intensity={1.5}/>
          <pointLight color="#FFFCC0" castShadow="true" position={[-4.9,11.05,-1]} intensity={1}/>
          <pointLight color="#F1D1FF" castShadow="true" position={[-12,-13.6,-15]} intensity={0.8}/>
          <pointLight color="#F1D1FF" castShadow="true" position={[0,-13.6,-15]} intensity={0.8}/>
          <pointLight color="#F1D1FF" castShadow="true" position={[16,-13.6,-15]} intensity={0.8}/>
          {/* <pointLight color="#F1D1FF" castShadow="true" position={[-15,-13,-50]} intensity={0.8}/> */}
          <Model className="modeltest" url="stage_sparklers.glb"  />

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
      <Menu/>
        
        <div className="page-wrapper" asscroll="true">
          
          <section className="hero">
            <div className="hero-wrapper">
              <div className="vim" >
              
                      <SvgComponent className="svgimg"/>   
              </div>
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
                <span className="section-title-text">About Vibrance</span>
             
              </h1>
             
            </div>
             
            <div className="section-detail-wrapper">
           
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab quis ea autem asperiores alias ex eaque quia ipsa ipsam iure molestiae quas, quam similique pariatur, debitis quod voluptas beatae.
              </p>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sed minima nihil repudiandae quaerat, autem distinctio provident voluptas eligendi vitae totam! Maiores a aut praesentium ut totam quos tempora sequi!
              </p>

            </div>
       
    {/* section1 part 2 */}
            <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar"></div>
            </div>
            <div className="section-intro-wrapper">
           
           <h1 className="section-title">
             <span className="section-title-text vit">About Vit</span>
              
           </h1>
               {/* <img className="gifvit" src={as} alt=""/> */}
            </div>
            <div className="section-detail-wrapper">
            

 

           
            <p className="section-text">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt nisi expedita ea labore doloribus, praesentium ipsum, dolorum fugit, consectetur optio molestias rerum nostrum nam earum corrupti dolor autem obcaecati!
            </p>

            <p className="tagline">"A Place to Learn,Chance to Grow" </p>

            <p className="section-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias aliquid fugit provident laudantium unde consequatur distinctio accusantium, minus, tempore asperiores esse! Aut iusto nemo dolorem natus dolore! Labore, nobis?
            </p>

            </div>
          </section>

          <div className="second-move section-margin"></div>

          <section className="second-section section right">
            <div className="progress-wrapper progress-bar-wrapper-right">
              <div className="progress-bar black-background"></div>
            </div>

            {/* SECTION2 */}
            <div className="sec-title">
              <ul className="Words">
                <li className="Words-line">
                  <p className="sec-p">&nbsp;</p>
                  <p className="sec-p">WHAT'S</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">WHAT'S</p>
                  <p className="sec-p">DIFFERENT</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">DIFFERENT</p>
                  <p className="sec-p">THIS</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">THIS</p>
                  <p className="sec-p">YEAR?</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">YEAR?</p>
                </li>
              </ul>
            </div>
            <div className="section-detail-wrapper">

              <p className="section-text">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius soluta unde? Consequatur nam praesentium, voluptate tempora repellat nobis maxime temporibus qui nulla quia explicabo! Voluptatem labore ducimus fuga iure?
              </p>

            </div>
            <Stats/>
          </section>

        


          <div className="third-move section-margin"></div>

          <section className="third-section section left">
            <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar green-background"></div>
            </div>

            <div className="section-intro-wrapper green-text green-border">
              <h1 className="section-title green-text green-border">
                <span className="section-title-text green-text">A Glimpse into the past</span>
               
              </h1>

            </div>

            <div className="section-detail-wrapper">
              <h3 className="section-heading">ArtStation</h3>
              <p className="section-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores dignissimos, esse hic sit doloremque est libero, necessitatibus eligendi repudiandae quod minima, nemo veniam! Quos vel laboriosam optio veniam itaque.!
              </p>
              <h3 className="section-heading">Instagram</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cupiditate placeat consectetur, illum fuga nam quasi maxime aliquid? Non, possimus dolor. Expedita dolorem excepturi, eius deserunt voluptatem totam sed numquam.
              </p>
              <h3 className="section-heading">LinkedIn</h3>
              <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos accusamus consectetur amet saepe impedit quaerat non eum vero delectus in perferendis dolorum itaque, dolor aut corrupti, odit earum voluptate!</p>
            </div>

            {/* Section three part 2 */}
            <div className="section-intro-wrapper green-text green-border">
              <h1 className="section-title green-text green-border">
                <span className="section-title-text green-text">A Glimpse into the future</span>
               
              </h1>

            </div>

            <div className="section-detail-wrapper">
          
              <p className="section-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores dignissimos, esse hic sit doloremque est libero, necessitatibus eligendi repudiandae quod minima, nemo veniam! Quos vel laboriosam optio veniam itaque.!
              </p>
              {/* <h3 className="section-heading">Instagram</h3> */}
              <p className="section-text">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime praesentium eveniet, et possimus soluta quod dicta quo, blanditiis, architecto natus obcaecati? Excepturi dolorem sunt adipisci, odio provident quasi iste error?
              </p>
              {/* <h3 className="section-heading">LinkedIn</h3> */}
              <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, magnam? Maiores deserunt culpa, itaque eius minus quam praesentium ipsa consectetur, in neque reiciendis sit natus cupiditate qui, nam ducimus minima!</p>
            </div>








          </section>
           
          <div className="fourth-move section-margin"></div>

          <section className="fourth-section section right">
            <div className="progress-wrapper progress-bar-wrapper-right">
              <div className="progress-bar grey-background"></div>
            </div>

            <div className="sec-title">
              <ul className="Words">
                <li className="Words-line">
                  <p className="sec-p">&nbsp;</p>
                  <p className="sec-p">MEET</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">MEET</p>
                  <p className="sec-p">THE</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">THE</p>
                  <p className="sec-p">TEAM</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">TEAM</p>

                </li>

              </ul>
            </div>

            <div class="team-container">
              <TeamCard img={team1} name="DR. G. VISWANATHAN" sub="CHANCELLOR"/>
              <TeamCard img={team2} name="Mr. Sankar Viswanathan" sub="VICE-PRESIDENT"/>
              <TeamCard img={team3} name="Dr. Sekar Viswanathan" sub="VICE-PRESIDENT"/>
              <TeamCard img={team4} name="Mr. G V Selvam" sub="VICE-PRESIDENT"/>
            </div>
            <div className="Button-container"><Button text="VIEW MORE"/></div>

            <div className="sec-title">
              <ul className="Words">
                <li className="Words-line">
                  <p className="sec-p">&nbsp;</p>
                  <p className="sec-p">WANT TO</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">WANT TO</p>
                  <p className="sec-p">REACH</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">REACH</p>
                  <p className="sec-p">US?</p>
                </li>
                <li className="Words-line">
                  <p className="sec-p">US?</p>

                </li>
 
              </ul>
            </div>
            <div className="contact">
              <h1 className="contact-header">Name</h1>
              <h2 className="contact-sub">Convenor, Vibrance 2023</h2>
            </div>
            <div className="Button-container"><Button text="EMAIL"/></div>

            <div className="copyright-container">
             
            </div>
            <div class="support">
              
              <a className="insta" href="/" ><img src={insta} alt=""/></a>
              <a className="yout" href="/" ><img src={yout} alt=""/></a>
            </div>
            <p className="copyright"> ©Copyright VIBRANCE 2023</p>


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

