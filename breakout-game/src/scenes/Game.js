import { Scene } from "phaser";
import { SECONDARY_COLOR } from "../utils/constant";

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
    this.createGameScreen();
  }

  createGameScreen() {
    this.add.rectangle(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.canvasWidth - 100,
      this.canvasHeight - 100,
      SECONDARY_COLOR
    );
  }
}
