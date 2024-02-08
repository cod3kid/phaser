import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.canvasWidth;
    this.canvasHeight;
  }

  init() {
    this.canvasWidth = this.scale.width;
    this.canvasHeight = this.scale.height;
  }

  create() {
    this.createGround();
    this.createDino();
  }

  createGround() {
    this.add
      .tileSprite(0, this.canvasWidth, this.canvasHeight, 26, "ground")
      .setOrigin(0, 1);
  }
}
