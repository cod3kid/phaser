import { Scene } from "phaser";
import ground from "../assets/ground.png";
import dinoIdle from "../assets/dino-idle-2.png";
export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.image("ground", ground);
    this.load.image("dinoIdle", dinoIdle);
  }

  create() {
    this.scene.start("Game");
  }
}
