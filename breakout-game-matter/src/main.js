import { Game } from "./scenes/Game";
import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#210D30",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Preloader, Game],
  physics: {
    default: "matter",
    matter: {
      gravity: {
        y: 0,
        x: 0,
      },
      setBounds: {
        top: true,
        left: true,
        right: true,
        bottom: false,
      },
    },
  },
};

export default new Phaser.Game(config);
