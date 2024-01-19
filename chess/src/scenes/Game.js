import { Scene } from "phaser";
import { pieces, playerTurnTextStyle } from "../utils/constant";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.canvasWidth;
    this.canvasHeight;
    this.playerTurnText;
    this.allCells = [];
    this.playerTurn = "white";
  }

  init() {
    this.canvasWidth = this.scale.width;
    this.canvasHeight = this.scale.height;
  }

  create() {
    this.createBoard();
    this.createPlayerTurnText();
  }

  createBoard() {
    let x = 270;
    let y = 150;
    const squareSize = 64;

    pieces.forEach((piece, i) => {
      let squareColor;
      const row = Math.floor((63 - i) / 8) + 1;

      if (row % 2 === 0) {
        squareColor = i % 2 === 0 ? 0xebe2c2 : 0xb15a29;
      } else {
        squareColor = i % 2 === 0 ? 0xb15a29 : 0xebe2c2;
      }

      const cell = this.add.rectangle(
        x,
        y,
        squareSize,
        squareSize,
        squareColor
      );

      this.add
        .zone(cell.x, cell.y, squareSize, squareSize)
        .setName("cell" + i)
        .setRectangleDropZone(squareSize, squareSize);

      if (piece != "") {
        const placedPiece = this.add
          .image(cell.x, cell.y, piece)
          .setScale(0.1)
          .setName(piece)
          .setInteractive({ draggable: true })
          .setDepth(3);

        if (i >= 48) {
          placedPiece.setTintFill(0xffffff);
        }

        placedPiece
          .on(Phaser.Input.Events.DRAG, (pointer, dragX, dragY) => {
            placedPiece.setPosition(dragX, dragY);
          })
          .on(Phaser.Input.Events.DROP, (pointer, dropZone) => {
            const dropZoneName = dropZone.name;
            const dropZoneId = dropZoneName.slice(4);
            const droppedCell = this.allCells[dropZoneId];
            placedPiece.setPosition(droppedCell.x, droppedCell.y);
            this.changePlayerTurnText();
          });
      }

      this.allCells.push(cell);

      x += squareSize + 5;

      if ((i + 1) % 8 === 0) {
        x = 270;
        y += squareSize + 5;
      }
    });
  }

  createPlayerTurnText() {
    this.playerTurnText = this.add
      .text(
        this.canvasWidth / 2,
        this.canvasHeight - 50,
        "It is " + this.playerTurn + "'s turn.",
        playerTurnTextStyle
      )
      .setOrigin(0.5);
  }

  changePlayerTurnText() {
    if (this.playerTurn === "white") {
      this.playerTurn = "black";
    } else {
      this.playerTurn = "white";
    }

    this.playerTurnText.setText("It is " + this.playerTurn + "'s turn.");
  }
}
