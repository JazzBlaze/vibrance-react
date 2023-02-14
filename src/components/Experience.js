import * as THREE from "three";
import Sizes from "./Sizes";
import Preloader from "./Preloader.js";
import Controls from "./Controls";
import Floor from "./Floor";


export default class Experience {
    
    static instance;
    constructor(canvas,scene,animations,pause,usepause,useroatex,userotatez,uselerpdisable) {
      
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene= scene;
        this.animations=animations;
        this.pause=pause;
        this.usepause=usepause;
        this.useroatex=useroatex;
        this.userotatez=userotatez;
        this.uselerpdisable=uselerpdisable;
        this.sizes = new Sizes();

        this.floor=new Floor();
        this.preloader = new Preloader();
        

        this.preloader.on("enablecontrols", () => {
            this.controls = new Controls();
   
           
        });

        this.sizes.on("resize", () => {
            this.update();
        });
        
        //gradient headings
        var grad1 = document.getElementById('grad1');
        var grad2 = document.getElementById('grad2');
        var grad3 = document.getElementById('grad3');
        const children1 = grad1.children;
        const children2 = grad2.children;
        const children3 = grad3.children;
        setTimeout(function () {
          Array.from(children1).forEach(span => {
            span.classList.add('gradient-headings')
          });
          Array.from(children2).forEach(span => {
            span.classList.add('gradient-headings')
          });
          Array.from(children3).forEach(span => {
            span.classList.add('gradient-headings')
          });
        }, 4000);

    }

    resize() {


    }

    update() {
        this.preloader.update();
        
        if (this.controls) {
            this.controls.update();
        }
    }
}
