import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    let x = 270;
    let y = 150;
    const squareSize = 64;

    for (let i = 0; i < 64; i++) {
      let squareColor;
      const row = Math.floor((63 - i) / 8) + 1;

      if (row % 2 === 0) {
        squareColor = i % 2 === 0 ? 0xebe2c2 : 0xb15a29;
      } else {
        squareColor = i % 2 === 0 ? 0xb15a29 : 0xebe2c2;
      }

      const currentCell = this.add.rectangle(
        x,
        y,
        squareSize,
        squareSize,
        squareColor
      );

      x += squareSize + 5;

      if ((i + 1) % 8 === 0) {
        x = 270;
        y += squareSize + 5;
      }
    }
  }
}
