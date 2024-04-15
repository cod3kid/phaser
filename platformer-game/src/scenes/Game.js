import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.add.image(200, 200, "penguin", "penguin_die03.png");
  }
}
