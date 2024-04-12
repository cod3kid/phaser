export default class Food extends Phaser.GameObjects.Image {
  constructor({ scene, x, y }) {
    super(scene, x, y, "food");
    this.scene = scene;

    this.setPosition(x * 16, y * 16)
      .setOrigin(0.5)
      .setScale(0.05);

    this.total = 0;

    this.scene.add.existing(this);
  }
}
