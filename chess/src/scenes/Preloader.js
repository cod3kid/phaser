import { Scene } from "phaser";

import king from "../assets/king.png";
import queen from "../assets/queen.png";
import knight from "../assets/knight.png";
import bishop from "../assets/bishop.png";
import rook from "../assets/rook.png";
import pawn from "../assets/pawn.png";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.image("king", king);
    this.load.image("queen", queen);
    this.load.image("knight", knight);
    this.load.image("rook", rook);
    this.load.image("bishop", bishop);
    this.load.image("pawn", pawn);
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("Game");
  }
}
