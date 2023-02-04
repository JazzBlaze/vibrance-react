import * as THREE from "three";
import Sizes from "./Sizes";
import Preloader from "./Preloader.js";

// import Controls from "./World/Controls.js";

export default class Experience {
    
    static instance;
    constructor(canvas) {
        
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;

        this.sizes = new Sizes();


        this.preloader = new Preloader();

        // this.preloader.on("enablecontrols", () => {
        //     this.controls = new Controls();
        // });

        this.sizes.on("resize", () => {
            this.resize();
        });

    }

    resize() {
        //resize the scene for mobile

    }

    update() {
        this.preloader.update();
        
        // if (this.controls) {
        //     this.controls.update();
        // }
    }
}
