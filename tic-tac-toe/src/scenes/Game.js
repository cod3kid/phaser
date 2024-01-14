import { Scene } from "phaser";
import {
  markingStyle,
  playerAMarkingStyle,
  playerBMarkingStyle,
  winnerTextStyle,
} from "../utils/constants";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.screenWidth;
    this.screenHeight;
    this.titleText;
    this.winnerText;
    this.isPlayerATurn = true;
    this.isWinnerAnnounced = false;
    this.allCells = [];
    this.allTexts = [];
    this.playerA = [];
    this.playerB = [];
    this.winningLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  init() {
    this.screenWidth = this.game.scale.width;
    this.screenHeight = this.game.scale.height;
  }

  create() {
    this.createTitleText();
    this.createBoard();
    this.createWinnerText();
    this.createActionButtons();
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

          if (
            this.playerA.includes(i) ||
            this.playerB.includes(i) ||
            this.isWinnerAnnounced
          )
            return;

          if (this.isPlayerATurn) {
            marking = "X";
            style = playerAMarkingStyle;
            this.playerA.push(i);
          } else {
            marking = "O";
            style = playerBMarkingStyle;
            this.playerB.push(i);
          }

          const text = this.add
            .text(this.allCells[i].x, this.allCells[i].y, marking, style)
            .setOrigin(0.5);

          this.allTexts.push(text);

          this.winningLogic.forEach((cond) => {
            let countA = 0;
            let countB = 0;

            cond.forEach((item) => {
              if (this.playerA.includes(item)) {
                countA++;
              }
            });

            if (countA === 3) {
              this.isWinnerAnnounced = true;
              this.winnerText.setText("Player A wins!!");
            }

            cond.forEach((item) => {
              if (this.playerB.includes(item)) {
                countB++;
              }
            });

            if (countB === 3) {
              this.isWinnerAnnounced = true;
              this.winnerText.setText("Player B wins!!");
            }
          });

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

  createWinnerText() {
    this.winnerText = this.add.text(
      this.screenWidth / 2 - 150,
      this.screenHeight - 200,
      "",
      winnerTextStyle
    );
  }

  createActionButtons() {
    this.resetBtn = this.add
      .rectangle(
        this.screenWidth / 2,
        this.screenHeight - 100,
        100,
        30,
        0xff0000
      )
      .setInteractive();

    this.add
      .text(this.resetBtn.x, this.resetBtn.y, "Reset", {
        fontFamily: "Arial",
      })
      .setOrigin(0.5);

    this.resetBtn.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.allTexts.forEach((item) => {
        item?.destroy();
      });

      this.allTexts = [];
      this.playerA = [];
      this.playerB = [];
      this.isWinnerAnnounced = false;
      this.isPlayerATurn = true;
      this.winnerText.setText("");
    });
  }
}
