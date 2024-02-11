export default class Dino extends Phaser.Physics.Arcade.Sprite {
  constructor({ scene, x, y }) {
    super(scene, x, y, "dinoIdle");

    this.scene.physics.add.existing(this);
    this.scene.add.existing(this);

    this.init();
    this.registerJumpListener();
  }

  init() {
    this.setOrigin(0, 1).setCollideWorldBounds(true);
  }

  registerJumpListener() {
    this.scene.input.keyboard.on("keydown-SPACE", () => {
      this.setVelocityY(-1000);
    });
  }
}
