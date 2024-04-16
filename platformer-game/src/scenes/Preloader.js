import { Scene } from "phaser";
import penguinImg from "../assets/penguin.png";
import penguinJson from "../assets/penguin.json";
import tiles from "../assets/sheet.png";
import tilemap from "../assets/game.json";
export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.atlas("penguin", penguinImg, penguinJson);
    this.load.image("tiles", tiles);
    this.load.tilemapTiledJSON("tilemap", tilemap);
  }

  create() {
    this.scene.start("Game");
  }
}
