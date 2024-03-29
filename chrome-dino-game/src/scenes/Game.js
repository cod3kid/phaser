import { Scene } from "phaser";
import Dino from "../classes/Dino";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.canvasWidth;
    this.canvasHeight;

    this.dino;
    this.ground;
    this.obstacleSpawnTime = 0;
    this.isGameStarted = false;
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
    this.ground = this.add
      .tileSprite(0, this.canvasHeight, this.canvasWidth, 26, "ground")
      .setOrigin(0, 1);
  }

  createDino() {
    this.dino = new Dino({ scene: this, x: 0, y: this.canvasHeight })
      .setOrigin(0, 1)
      .setCollideWorldBounds(true);
  }

  update(time, delta) {
    if (this.isGameStarted) {
      this.ground.x -= 1;
      this.ground.width += 4;

      if (this.dino.body.deltaAbsY() > 0) {
        this.dino.play("dinoRun", true);
      } else {
        this.dino.anims.stop();
        this.dino.setTexture("dinoRun", 0);
      }
    }

    this.obstacleSpawnTime += delta;

    if (this.obstacleSpawnTime >= 1500) {
      this.obstacleSpawnTime = 0;
      console.log("Spawning...");
    }
  }
}
