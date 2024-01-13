import { Scene } from "phaser";
import {
  markingStyle,
  playerAMarkingStyle,
  playerBMarkingStyle,
} from "../utils/constants";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.titleText;
    this.isPlayerATurn = true;
    this.allCells = [];
    this.playerA = [];
    this.playerB = [];
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
    let x = 360;
    let y = 200;
    const squareSize = 128;

    for (let i = 0; i < 9; i++) {
      const currentCell = this.add
        .rectangle(x, y, squareSize, squareSize, 0x8accff)
        .setInteractive()
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
          let marking, style;

          if (this.playerA.includes(i) || this.playerB.includes(i)) return;

          if (this.isPlayerATurn) {
            marking = "X";
            style = playerAMarkingStyle;
            this.playerA.push(i);
          } else {
            marking = "O";
            style = playerBMarkingStyle;
            this.playerB.push(i);
          }

          this.add
            .text(this.allCells[i].x, this.allCells[i].y, marking, style)
            .setOrigin(0.5);

          this.isPlayerATurn = !this.isPlayerATurn;
        });

      this.allCells.push(currentCell);

      x += squareSize + 5;

      if ((i + 1) % 3 === 0) {
        x = 360;
        y += squareSize + 5;
      }
    }
  }
}
