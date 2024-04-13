import { Scene } from "phaser";
import Snake from "../classes/Snake";
import Food from "../classes/Food";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.snake;
    this.cursors;
  }

  create() {
    this.snake = new Snake({ scene: this, x: 8, y: 8 });
    this.food = new Food({ scene: this, x: 4, y: 4 });

    //  Create our keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    if (!this.snake.alive) {
      return;
    }

    /**
     * Check which key is pressed, and then change the direction the snake
     * is heading based on that. The checks ensure you don't double-back
     * on yourself, for example if you're moving to the right and you press
     * the LEFT cursor, it ignores it, because the only valid directions you
     * can move in at that time is up and down.
     */
    if (this.cursors.left.isDown) {
      this.snake.faceLeft();
    } else if (this.cursors.right.isDown) {
      this.snake.faceRight();
    } else if (this.cursors.up.isDown) {
      this.snake.faceUp();
    } else if (this.cursors.down.isDown) {
      this.snake.faceDown();
    }

    if (this.snake.update(time)) {
      this.snake.collideWithFood();
    }
  }
}
