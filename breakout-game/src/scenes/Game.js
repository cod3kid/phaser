import { Scene } from "phaser";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../utils/constant";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.canvasWidth;
    this.canvasHeight;

    this.gameScreen;
    this.paddle;
    this.ball;
    this.isAttachedToPad = true;
  }

  init() {
    this.canvasWidth = this.scale.width;
    this.canvasHeight = this.scale.height;
  }

  create() {
    this.createGameScreen();
    this.createPaddle();
    this.createBall();
  }

  createGameScreen() {
    this.gameScreen = this.add.rectangle(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.canvasWidth,
      this.canvasHeight,
      SECONDARY_COLOR
    );
  }

  createPaddle() {
    this.paddle = this.add.rectangle(
      this.canvasWidth / 2,
      this.canvasHeight - 70,
      100,
      20,
      PRIMARY_COLOR
    );

    this.physics.add.existing(this.paddle);

    this.input.on(Phaser.Input.Events.POINTER_MOVE, (pointer) => {
      this.paddle.setX(pointer.x);
    });
  }

  createBall() {
    this.ball = this.add.circle(
      this.paddle.x,
      this.paddle.y - 30,
      8,
      PRIMARY_COLOR
    );

    this.physics.add.existing(this.ball);
  }

  update() {
    if (this.isAttachedToPad) {
      this.ball.setX(this.paddle.x);
    }
  }
}
