import { Scene } from "phaser";
import food from "../assets/food.png";
export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.image("food", food);
  }

  create() {
    this.scene.start("Game");
  }
}
