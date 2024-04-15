import { Scene } from "phaser";
import penguinImg from "../assets/penguin.png";
import penguinJson from "../assets/penguin.json";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.atlas("penguin", penguinImg, penguinJson);
  }

  create() {
    this.scene.start("Game");
  }
}
