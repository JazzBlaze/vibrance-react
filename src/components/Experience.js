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

        //gradient headings
        var el = document.getElementById('elem');
        const children = el.children;
        setTimeout(function () {
          Array.from(children).forEach(span => {
            span.classList.add('gradient-headings')
          });
        }, 4000);

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
