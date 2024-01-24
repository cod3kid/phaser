import { Scene } from "phaser";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../utils/constant";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.canvasWidth;
    this.canvasHeight;

    this.gameScreen;
    this.paddle;
  }

  init() {
    this.canvasWidth = this.scale.width;
    this.canvasHeight = this.scale.height;
  }

  create() {
    this.createGameScreen();
    this.createPaddle();
  }

  createGameScreen() {
    this.gameScreen = this.add.rectangle(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.canvasWidth - 100,
      this.canvasHeight - 100,
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
  }
}
