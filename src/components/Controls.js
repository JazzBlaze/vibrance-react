import * as THREE from "three";
import Experience from "./Experience";
import GSAP, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ASScroll from "@ashthornton/asscroll";
import { delay } from "q";


export default class Controls {
   
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.uselerpdisable=this.experience.uselerpdisable;
      
        this.circleFirst = this.experience.floor.circleFirst;
        this.circleSecond = this.experience.floor.circleSecond;
        this.circleThird = this.experience.floor.circleThird;
        this.circleFour = this.experience.floor.circleFour;

     GSAP.registerPlugin(ScrollTrigger);

        document.querySelector(".page").style.overflow = "visible";

        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            this.setSmoothScroll();
        }
        this.setScrollTrigger();
    }



    setupASScroll() {
      
        const asscroll = new ASScroll({
            ease: 0.1,
            disableRaf: true,
        });

     GSAP.ticker.add(asscroll.update);

        ScrollTrigger.defaults({
            scroller: asscroll.containerElement,
        });

        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
            scrollTop(value) {
                if (arguments.length) {
                    asscroll.currentPos = value;
                    return;
                }
                return asscroll.currentPos;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            fixedMarkers: true,
        });

        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);
        

        requestAnimationFrame(() => {
            
            asscroll.enable({
                newScrollElements: document.querySelectorAll(
                    " GSAP-marker-start,  GSAP-marker-end, [asscroll]"
                ),
            });
        });
        return asscroll;
    }

    setSmoothScroll() {
        this.asscroll = this.setupASScroll();
    }

    setScrollTrigger() {
        ScrollTrigger.matchMedia({
            //Desktop
            "(min-width: 969px)": () => {
                // console.log("fired desktop");

                // this.scene.scale.set(0.11, 0.11, 0.11);
              
                // First section -----------------------------------------
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        // markers: true,
                        invalidateOnRefresh: true,
                    },
                });
        
                this.firstMoveTimeline
                .fromTo(
                    this.scene.position,
                    { x: 0, y: -2, z: 0,
                        
                    },
                    {
                        x: () => {
                            
                            return this.sizes.width * 0.0067;
                        },
                        onComplete: () => {
                            this.experience.preloader.emit('sec1-t2')
                        }
                    }
                )
               
                // Second section -----------------------------------------
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    
                    .to(
                        this.scene.position,
                        {   
                           duration:300,
                            x: () => {
                                return -1;
                            },
                            y:-6,
                            onComplete: () => {
                            
                                window.modelObjects.keyboard.play();
                                window.modelObjects.keyboard.loop=THREE.LoopOnce;
                                window.modelObjects.keyboard.clampWhenFinished = true;

                                window.modelObjects.Cable1.play();
                                window.modelObjects.Cable1.loop=THREE.LoopOnce;
                                window.modelObjects.Cable1.clampWhenFinished = true;

                                
                            },
                          
                            
                           
                        },
                        "same"
                    )
                                        // .to(
                    //     this.scene.position,{
                     
                    //         duration:100,
                    //         y:()=>{
                    //             return -24;
                                
                    //         }
                      
                    //     }
                    // )
                    .to(
                        this.scene.scale,
                        {   duration:500,
                            x: 1,
                            y: 1,
                            z: 1,
                           
                        },
                        "same"
                    )
                    // .to(
                    //     this.scene.position,{
                    //         duration:1000,
                    //         y:-24,
                    //     }
                    // )
                    

                // Third section -----------------------------------------
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })

                .to(
                    this.scene.scale,
                    {   
                        x: 1,
                        y: 1,
                        z: 1,
                        onComplete:()=>{
                            this.experience.preloader.emit('sec3-t2')
                        }
                        
                       
                    },
                )

            
                
                .to(
                    this.scene.position,
                    {   
                       duration:300,
                        x: () => {
                            return 15;
                        },
                        y:-6,
                        // onComplete: () => {
                        
                        //     window.modelObjects.guitar.play();
                        //     window.modelObjects.guitar.loop=THREE.LoopOnce;
                        //     window.modelObjects.guitar.clampWhenFinished = true;

                            
                        // },
                      
                        
                       
                    },
                    "same"
                )
               
             
            
            this.fourthMoveTimeline = new GSAP.timeline({
                scrollTrigger: {
                    trigger: ".fourth-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })
            .to(
                this.scene.position,{
                    x:-this.sizes.width * 0.006,
                    y:-3,
                    z:-1,
                    duration:300000,
                    onComplete:()=>{
                        console.log("sec4")
                        this.experience.preloader.emit('sec4-t2');
                    }
                }
            )
            .to(
                this.scene.scale,{

                    x:0.41,
                    y:0.41,
                    z:0.41,
                    duration:300000,
                }
            )
            // .to(
                    
            //             this.scene.rotation,{
            //                 delay:9,
            //                 duration: 222, z: -Math.PI * 2,repeat:-1, ease: "none"
            //             })

            
            
        },

            // Mobile
            "(max-width: 968px)": () => {
                // console.log("fired mobile");

                // Resets
                this.scene.set(0.07, 0.07, 0.07);
                this.scene.position.set(0, 0, 0);
                

                // First section -----------------------------------------
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        // invalidateOnRefresh: true,
                    },
                }).to(this.scene.scale, {
                    x: 0.1,
                    y: 0.1,
                    z: 0.1,
                });

                // Second section -----------------------------------------
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.scene.scale,
                        {
                            x: 0.25,
                            y: 0.25,
                            z: 0.25,
                        },
                        "same"
                    )
                 
                    .to(
                        this.scene.position,
                        {
                            x: 1.5,
                        },
                        "same"
                    );

                // Third section -----------------------------------------
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                
            },

           

            // all
            all: () => {
                this.sections = document.querySelectorAll(".section");
                this.sections.forEach((section) => {
                    this.progressWrapper =
                        section.querySelector(".progress-wrapper");
                    this.progressBar = section.querySelector(".progress-bar");

                    if (section.classList.contains("right")) {
                     GSAP.to(section, {
                            borderTopLeftRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            },
                        });
                     GSAP.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            },
                        });
                    } else {
                     GSAP.to(section, {
                            borderTopRightRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            },
                        });
                     GSAP.to(section, {
                            borderBottomRightRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            },
                        });
                    }
                 GSAP.from(this.progressBar, {
                        scaleY: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.4,
                            pin: this.progressWrapper,
                            pinSpacing: false,
                        },
                    });
                });

                // All animations
                // First section -----------------------------------------
                this.firstCircle = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                }).to(this.circleFirst.scale, {
                    x: 13,
                    y: 13,
                    z: 13,
                    
                });

                // Second section -----------------------------------------
                this.secondCircle = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                })
                    .to(
                        this.circleSecond.scale,
                        {
                            x: 13,
                            y: 13,
                            z: 13,
                        },
                        "same"
                    );

                // Third section -----------------------------------------
                this.thirdCircle = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                }).to(this.circleThird.scale, {
                    
                    x: 13,
                    y: 13,
                    z: 13,
                });
                //Fourth section--------------------------------------------
                this.circleFour = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".fourth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                }).to(this.circleFour.scale, {
                    // delay:100,
                    // duration:30,
                    x: 13,
                    y: 13,
                    z: 13,
                });

            },
        });
    }
    resize() {}

    update() {}
}
