import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.canvasWidth;
    this.canvasHeight;

    this.dino;
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

  createDino() {
    this.dino = this.physics.add
      .sprite(0, this.canvasHeight, "dinoIdle")
      .setOrigin(0, 1);

    this.dino.setCollideWorldBounds(true);

    this.input.keyboard.on("keydown-SPACE", () => {
      this.dino.setVelocityY(-1000);
    });
  }
}
