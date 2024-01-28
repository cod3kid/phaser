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
    const rectangle = this.add.rectangle(
      this.canvasWidth / 2,
      this.canvasHeight - 70,
      100,
      20,
      PRIMARY_COLOR
    );

    this.paddle = this.matter.add
      .gameObject(rectangle, { shape: "rectangle" })
      .setBounce(1)
      .setIgnoreGravity(true);

    this.input.on(Phaser.Input.Events.POINTER_MOVE, (pointer) => {
      this.paddle.setX(pointer.x);
    });
  }

  createBall() {
    const circle = this.add.circle(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      8,
      PRIMARY_COLOR
    );

    this.ball = this.matter.add
      .gameObject(circle, { shape: "circle" })
      .setBounce(1)
      .setVelocity(5, 10)
      .setFrictionAir(0);

    // this.matter.body.setInertia(this.ball.body, Infinity);
  }

  update() {
    if (this.ball.y > this.canvasHeight - 50) {
      this.isAttachedToPad = true;
      this.ball.setPosition(this.paddle.x, this.paddle.y - 20).setVelocity(1);
    }
  }
}
