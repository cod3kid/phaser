import { Scene } from "phaser";
import { textStyle } from "../utils/constant";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.rows = 8;
    this.cols = 8;
    this.size = 40;
    this.board = [];
    this.food = {
      x: Phaser.Math.Between(0, this.cols - 1),
      y: Phaser.Math.Between(0, this.rows - 1),
    };

    this.snakeHead = {
      x: Phaser.Math.Between(0, this.cols - 1),
      y: Phaser.Math.Between(0, this.rows - 1),
    };

    this.direction = { x: 0, y: 0 };
    this.isGameOver = false;
  }

  create() {
    this.createBoard();
    this.createSnakeDirectionListener();
  }

  createBoard() {
    const baseXY = { x: 200, y: 200 };
    this.gridGraphics?.destroy();
    this.gridGraphics = this.add.graphics();
    this.gridGraphics.lineStyle(2, 0x000000, 1);

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.board[i][j] = 0;
      }
    }

    this.snakeHead.x += this.direction.x;
    this.snakeHead.y += this.direction.y;

    this.board[this.food.x][this.food.y] = -1;

    if (!this.isGameOver) {
      this.board[this.snakeHead.x][this.snakeHead.y] = 1;
    }

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j] == 0) {
          this.createSquare(baseXY, i, j, 0xffffff);
          this.createText(baseXY, i, j, 0);
        } else if (this.board[i][j] == -1) {
          this.createSquare(baseXY, i, j, 0xff0000);
          this.createText(baseXY, i, j, -1);
        } else {
          this.createSquare(baseXY, i, j, 0xffff00);
          this.createText(baseXY, i, j, 1);
        }
      }
    }
  }

  createSnakeDirectionListener() {
    this.input.keyboard.on("keydown", (event) => {
      const { key } = event;
      console.log(key);
      if (key === "ArrowLeft") {
        this.direction = { x: -1, y: 0 };
      }
    });
  }

  createSquare(baseXY, i, j, fillColor) {
    this.gridGraphics.strokeRect(
      baseXY.x + i * this.size,
      baseXY.y + j * this.size,
      this.size,
      this.size
    );

    if (fillColor) {
      this.gridGraphics.fillStyle(fillColor);
      this.gridGraphics.fillRect(
        baseXY.x + i * this.size,
        baseXY.y + j * this.size,
        this.size,
        this.size
      );
    }
  }

  createText(baseXY, i, j, value) {
    this.add
      .text(
        baseXY.x + i * this.size + this.size / 2,
        baseXY.y + j * this.size + this.size / 2,
        value,
        textStyle
      )
      .setOrigin(0.5);
  }

  update() {
    if (
      this.snakeHead.x < 0 ||
      this.snakeHead.x > this.cols - 1 ||
      this.snakeHead.y < 0 ||
      this.snakeHead.y > this.rows - 1
    ) {
      this.isGameOver = true;
    }
    this.createBoard();
  }
}
