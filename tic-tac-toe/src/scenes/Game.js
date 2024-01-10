import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.titleText;
  }

  init() {
    this.screenWidth = this.game.scale.width;
  }

  create() {
    this.titleText = this.add
      .text(this.screenWidth / 2, 100, "Tic Tac Toe", {
        fontSize: "34px",
        color: "black",
        fontFamily: "Arial",
      })
      .setOrigin(0.5);

    this.titleText.setFontStyle("Bold");
  }
}
