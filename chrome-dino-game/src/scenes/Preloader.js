import { Scene } from "phaser";
import ground from "../assets/ground.png";
import dinoIdle from "../assets/dino-idle-2.png";
import dinoRun from "../assets/dino-run.png";
import dinoHurt from "../assets/dino-hurt.png";
import obstacle1 from "../assets/cactuses_1.png";
import obstacle2 from "../assets/cactuses_2.png";
import obstacle3 from "../assets/cactuses_3.png";
import obstacle4 from "../assets/cactuses_4.png";
import obstacle5 from "../assets/cactuses_5.png";
import obstacle6 from "../assets/cactuses_6.png";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.image("ground", ground);
    this.load.image("dinoIdle", dinoIdle);
    this.load.image("dinoHurt", dinoHurt);

    this.load.image("obstacle1", obstacle1);
    this.load.image("obstacle2", obstacle2);
    this.load.image("obstacle3", obstacle3);
    this.load.image("obstacle4", obstacle4);
    this.load.image("obstacle5", obstacle5);
    this.load.image("obstacle6", obstacle6);

    this.load.spritesheet("dinoRun", dinoRun, {
      frameWidth: 88,
      frameHeight: 94,
    });
  }

  create() {
    this.scene.start("Game");
  }
}
