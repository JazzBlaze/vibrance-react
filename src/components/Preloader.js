import { EventEmitter } from "events";
import Experience from "./Experience.js";
import GSAP from "gsap";
import convert from "./covertDivsToSpans";
export default class Preloader extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.scene.position.set(1,0,0);
        
       this.pause=this.experience.pause;
       this.usepause=this.experience.usepause;
       this.userotatex=this.experience.useroatex;
       this.useroatez=this.experience.userotatez;
       this.val=this.experience.val;
       this.useval=this.experience.useval;

       
        console.log(this.scene)
        this.animations = this.experience.animations;
        this.sizes = this.experience.sizes;
        this.device = this.sizes.device;
        

        this.sizes.on("switchdevice", (device) => {
            this.device = device;
        });



   
        this.setAssets();
        this.playIntro();
    }

    setAssets() {
        convert(document.querySelector(".intro-text"));
        convert(document.querySelector(".hero-main-title"));
        convert(document.querySelectorAll(".hero-main-description"));
        convert(document.querySelectorAll(".hero-second-subheading"));
        convert(document.querySelector(".second-sub"));
        

    }

    firstIntro() {
        return new Promise((resolve) => {
            this.timeline = new GSAP.timeline();
            this.timeline.set(".animatedis", { y: 0, yPercent: 100 });
            this.timeline.to(".preloader", {
                opacity: 0,
                delay: 1,
                onComplete: () => {
                    document.querySelector(".preloader").classList.add("hidden");
                    document.querySelector(".alpha").style.visibility = "visible";
                    
                },
            });
            if (this.device === "desktop") {
                this.timeline
                    .to(this.scene.scale, {
                        x: 2,
                        y: 2,
                        z: 2,
                        ease: "back.out(2.5)",
                        duration: 0.7,
                    })
                    .to(this.scene.position, {
                        x: -7,
                        ease: "power1.out",
                        duration: 0.7,
                     
                    
                    
                    });
            } else {
                this.timeline
                    .to(this.scene.scale, {
                        x: 1.4,
                        y: 1.4,
                        z: 1.4,
                        ease: "back.out(2.5)",
                        duration: 0.7,
                    })
                    .to(this.scene.position, {
                        z: -1,
                        ease: "power1.out",
                        duration: 0.7,
                    });
            }
            this.timeline
                .to(".intro-text .animatedis", {
                    yPercent: 0,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                })
                .to(
                    ".arrow-svg-wrapper",
                    {
                        opacity: 1,
                        onComplete: resolve,
                    },
                    "same"

                );
        });
    }

    secondIntro() {
        return new Promise((resolve) => {
            this.secondTimeline = new GSAP.timeline();

            this.secondTimeline
                .to(
                    ".intro-text .animatedis",
                    {
                        yPercent: 100,
                        stagger: 0.05,
                        ease: "back.in(1.7)",
                    },
                    "fadeout"
                )
                .to(
                    ".arrow-svg-wrapper",
                    {
                        opacity: 0,
                    },
                    "fadeout"
                )

                // .to(
                //     this.scene, {rotation:"360",duration:1, ease:"Linear", repeat:-1}
                // )
                // .to(
                    
                //     this.useroatez(-0.1),
                // )
                // .to(
                    
                //         this.scene.rotation,{
                //             duration: 2, z: -Math.PI * 2,repeat:-1, ease: "none"
                //         }
                    
                // )
                
                .to(
                    
                  
                
                    this.scene.position,
                    {   
                        x: 0,
                        y: 0,
                        z: 0,
                        ease: "power1.out",  
                         

                        
                    },
                    "same"
                )
                
                .to(
                    this.scene.position,{
                        x:0,
                        y:-2,
                        z:0,
                        ease:"power1.out",
                       
                    }
                )
                .to(this.scene.scale, {
                    x: 0.4,
                    y: 0.4,
                    z: 0.4,
                    ease: "back.out(0)",
                    duration: 0.7,
                    onComplete: () => {
                 
                        this.usepause(false);

                        
                        
                        
                      },
                 }
            
                )
          
              
            
                .to(
                    ".hero-main-title .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )
                .to(
                    ".hero-main-description .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )
                .to(
                    ".first-sub .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )
                .to(
                    ".second-sub .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )

                .to(".arrow-svg-wrapper", {
                    opacity: 1,
                    onComplete:resolve,
                });
        });
    }



    onScroll(e) {
     
        if (e.deltaY > 0) {
            this.removeEventListeners();
            this.playSecondIntro();
        }
    }

    onTouch(e) {
        this.initalY = e.touches[0].clientY;
    }

    onTouchMove(e) {
        let currentY = e.touches[0].clientY;
        let difference = this.initalY - currentY;
        if (difference > 0) {
            console.log("swipped up");
            this.removeEventListeners();
            this.playSecondIntro();
        }
        this.intialY = null;
    }

    removeEventListeners() {
        window.removeEventListener("wheel", this.scrollOnceEvent);
        window.removeEventListener("touchstart", this.touchStart);
        window.removeEventListener("touchmove", this.touchMove);
    }

    async playIntro() {
        this.scaleFlag = true;
        await this.firstIntro();
        this.moveFlag = true;
        console.log(this.moveFlag);
        this.scrollOnceEvent = this.onScroll.bind(this);
        this.touchStart = this.onTouch.bind(this);
        this.touchMove = this.onTouchMove.bind(this);
        
        window.addEventListener("wheel", this.scrollOnceEvent);
        window.addEventListener("touchstart", this.touchStart);
        window.addEventListener("touchmove", this.touchMove);
    }
    async playSecondIntro() {
       
        this.moveFlag = false;
        await this.secondIntro();

        this.scaleFlag = false;
        this.emit("enablecontrols");
    }

    move() {
        if (this.device === "desktop") {
            this.scene.position.set(0, 0, 0);
        } else {
            this.scene.position.set(0, 0, 0);
        }
    }

    scale() {

        if (this.device === "desktop") {
            this.scene.scale.set(0.4, 0.4, 0.4);
        } else {
            this.scene.scale.set(0.07, 0.07, 0.07);
        }
    }

    update() {
        if (this.moveFlag) {
            this.move();
        }

        if (this.scaleFlag) {
            this.scale();
        }
    }
}
