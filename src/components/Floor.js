import * as THREE from "three";
import Experience from "./Experience";

export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;


        this.setCircles();
        
    }

    setCircles() {
        const geometry = new THREE.CircleGeometry(30, 128);
        const material = new THREE.MeshStandardMaterial({ color: 0xff611e });
        const material2 = new THREE.MeshStandardMaterial({ color: 0x8395cd });
        const material3 = new THREE.MeshStandardMaterial({ color: 0x8a63de });
        const material4 = new THREE.MeshStandardMaterial({ color: 0x525252});

        this.circleFirst = new THREE.Mesh(geometry, material);
        this.circleSecond = new THREE.Mesh(geometry, material2);
        this.circleThird = new THREE.Mesh(geometry, material3);
        this.circleFour = new THREE.Mesh(geometry, material4);

        this.circleFirst.position.y = -4;
        this.circleFirst.position.z= -15;

        this.circleSecond.position.y = -0.9;
        this.circleSecond.position.x = 2;
        this.circleSecond.position.z= -15;

        this.circleThird.position.y = -0.8;
        this.circleThird.position.z= -15;

        this.circleFour.position.y = -0.7;
        this.circleFour.position.z= -15;

        this.circleFirst.scale.set(0, 0, 0);
        this.circleSecond.scale.set(0, 0, 0);
        this.circleThird.scale.set(0, 0, 0);
        this.circleFour.scale.set(0, 0, 0);

        this.circleFirst.rotation.x =
            this.circleSecond.rotation.x =
            this.circleThird.rotation.x = 
            this.circleFour.rotation.x=
                -1.3;

        this.circleFirst.receiveShadow =
            this.circleSecond.receiveShadow =
            this.circleThird.receiveShadow = this.circleFour.receiveShadow=
                true;
        this.scene.add(this.circleFirst);
        this.scene.add(this.circleSecond);
        this.scene.add(this.circleThird);
        this.scene.add(this.circleFour);

    }

    resize() {}

    update() {}
}
