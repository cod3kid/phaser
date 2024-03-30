import { Scene } from "phaser";
import Dino from "../classes/Dino";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.canvasWidth;
    this.canvasHeight;

    this.dino;
    this.ground;
    this.obstaclesGroup;
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
    this.obstaclesGroup = this.add.group();
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

  spawnObstacle() {
    const randomObstacle = "obstacle" + (Math.floor(Math.random() * 6) + 1);
    const distance = Phaser.Math.Between(600, 900);
    // Creates an object and also adds it into the group
    this.obstaclesGroup
      .create(distance, this.canvasHeight, randomObstacle)
      .setOrigin(0.5, 1);
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

      // Spawn Obstacle
      this.obstacleSpawnTime += delta;

      if (this.obstacleSpawnTime >= 1500) {
        this.obstacleSpawnTime = 0;
        this.spawnObstacle();
      }

      Phaser.Actions.IncX(this.obstaclesGroup.getChildren(), -10);
      // this.obstaclesGroup.children.getArray().forEach((child) => {
      //   child.x -= 10;
      // });
    }
  }
}
