import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    const map = this.make.tilemap({ key: "tilemap" });
    const tileset = map.addTilesetImage("ice-world", "tiles");
    map.createLayer("ground", tileset);

    this.cameras.main.scrollY = 280;
  }
}
