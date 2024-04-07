import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.rows = 8;
    this.cols = 8;
    this.size = 40;
    this.board = [];
  }

  create() {
    this.createBoard();
  }

  createBoard() {
    const baseXY = { x: 200, y: 200 };
    const graphics = this.add.graphics();
    graphics.lineStyle(2, 0x000000, 1);

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.board[i][j] = 1;
        graphics.strokeRect(
          baseXY.x + i * this.size,
          baseXY.y + j * this.size,
          this.size,
          this.size
        );
      }
    }
  }
}
