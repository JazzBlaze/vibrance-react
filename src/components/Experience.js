import * as THREE from "three";
import Sizes from "./Sizes";
import Preloader from "./Preloader.js";
import Controls from "./Controls";


export default class Experience {
    
    static instance;
    constructor(canvas,scene,animations,pause,usepause,useclamp) {
      
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene= scene;
        this.animations=animations;
        this.pause=pause;
        this.usepause=usepause;
        this.useclamp=this.useclamp;
        this.sizes = new Sizes();


        this.preloader = new Preloader();

        this.preloader.on("enablecontrols", () => {
            this.controls = new Controls();
            console.log("ssn");
           
        });

        this.sizes.on("resize", () => {
            this.resize();
        });

    }

    resize() {
        //resize the scene for mobile

    }

    update() {
        this.preloader.update();
        
        if (this.controls) {
            this.controls.update();
        }
    }
}
