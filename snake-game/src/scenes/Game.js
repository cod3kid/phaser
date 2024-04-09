import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.rows = 8;
    this.cols = 8;
    this.size = 40;
    this.board = [];
    this.food = { x: 0, y: 0 };
  }

  create() {
    this.createBoard();
  }

  createBoard() {
    const baseXY = { x: 200, y: 200 };
    this.gridGraphics = this.add.graphics();
    this.gridGraphics.lineStyle(2, 0x000000, 1);

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.board[i][j] = 1;
      }
    }

    this.board[this.food.x][this.food.y] = -1;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j] == 1) {
          this.createSquare(baseXY, i, j, false);
        } else if (this.board[i][j] == -1) {
          this.createSquare(baseXY, i, j, true);
        }
      }
    }
  }

  createSquare(baseXY, i, j, isFill) {
    this.gridGraphics.strokeRect(
      baseXY.x + i * this.size,
      baseXY.y + j * this.size,
      this.size,
      this.size
    );

    if (isFill) {
      this.gridGraphics.fillStyle(0xff0000);
      this.gridGraphics.fillRect(
        baseXY.x + i * this.size,
        baseXY.y + j * this.size,
        this.size,
        this.size
      );
    }
  }
}
