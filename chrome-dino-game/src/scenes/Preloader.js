import { Scene } from "phaser";
import ground from "../assets/ground.png";
export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.image("ground", ground);
  }

  create() {
    this.scene.start("Game");
  }
}
