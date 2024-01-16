import { Scene } from "phaser";
import { pieces } from "../utils/constant";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.createBoard();
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

      if (piece != "") {
        const placedPiece = this.add
          .image(cell.x, cell.y, piece)
          .setScale(0.1)
          .setName(piece)
          .setDepth(3);
      }

      x += squareSize + 5;

      if ((i + 1) % 8 === 0) {
        x = 270;
        y += squareSize + 5;
      }
    });
  }
}
