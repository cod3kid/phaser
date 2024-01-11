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
    this.createTitleText();
    this.createBoard();
  }

  createTitleText() {
    this.titleText = this.add
      .text(this.screenWidth / 2, 100, "Tic Tac Toe", {
        fontSize: "34px",
        color: "black",
        fontFamily: "Arial",
      })
      .setOrigin(0.5);

    this.titleText.setFontStyle("Bold");
  }

  createBoard() {
    let x = 300;
    let y = 200;
    const squareSize = 128;

    for (let i = 1; i <= 9; i++) {
      this.add
        .rectangle(
          x + (i % 3) * (squareSize + 5),
          y,
          squareSize,
          squareSize,
          0x8accff
        )
        .setOrigin(0);

      if (i % 3 === 0) {
        y += squareSize + 5;
      }
    }
  }
}
