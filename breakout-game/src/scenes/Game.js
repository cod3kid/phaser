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
    this.createPaddleCollider();
  }

  createGameScreen() {
    this.gameScreen = this.add.rectangle(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.canvasWidth,
      this.canvasHeight,
      SECONDARY_COLOR
    );

    this.physics.world.setBoundsCollision(true, true, true, false);
  }

  createPaddle() {
    this.paddle = this.physics.add
      .image(this.canvasWidth / 2, this.canvasHeight - 70, "paddle")
      .setScale(0.015, 0.0125)
      .setTintFill(PRIMARY_COLOR)
      .setImmovable();

    this.input.on(Phaser.Input.Events.POINTER_MOVE, (pointer) => {
      this.paddle.setX(pointer.x);
    });
  }

  createBall() {
    this.ball = this.physics.add
      .image(this.paddle.x, this.paddle.y - 30, "ball")
      .setScale(0.125)
      .setTintFill(PRIMARY_COLOR)
      .setCollideWorldBounds(true)
      .setBounce(1);

    this.input.on(Phaser.Input.Events.POINTER_DOWN, (pointer) => {
      if (this.isAttachedToPad) {
        this.isAttachedToPad = false;
        this.ball.setVelocity(-75, -400);
      }
    });
  }

  createPaddleCollider() {
    this.physics.add.collider(
      this.ball,
      this.paddle,
      () => {
        if (this.ball.x > this.paddle.x) {
          this.ball.setVelocityX(-10 * (this.ball.x - this.paddle.x));
        } else {
          this.ball.setVelocityX(-10 * (this.paddle.x - this.ball.x));
        }
      },
      null,
      this
    );
  }

  update() {
    if (this.isAttachedToPad) {
      this.ball.setX(this.paddle.x);
    }
  }
}
