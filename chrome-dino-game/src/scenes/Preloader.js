import { Scene } from "phaser";
import ground from "../assets/ground.png";
import dinoIdle from "../assets/dino-idle-2.png";
import dinoRun from "../assets/dino-run.png";
export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.image("ground", ground);
    this.load.image("dinoIdle", dinoIdle);
    this.load.spritesheet("dinoRun", dinoRun, {
      frameWidth: 88,
      frameHeight: 94,
    });
  }

  create() {
    this.scene.start("Game");
  }
}
