export default class Dino extends Phaser.Physics.Arcade.Sprite {
  constructor({ scene, x, y }) {
    super(scene, x, y, "dinoIdle");

    this.scene.physics.add.existing(this);
    this.scene.add.existing(this);

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    this.init();
    this.registerJumpListener();
    this.registerRunAnimation();

    this.scene.events.on("update", () => {
      const spaceDownOnce = Phaser.Input.Keyboard.JustDown(this.cursors.space);
      const isOnGround = this.body.onFloor();

      if (spaceDownOnce && isOnGround) {
        this.setVelocityY(-1600);
      }
    });
  }

  init() {
    this.setOrigin(0, 1).setCollideWorldBounds(true);
  }

  registerJumpListener() {
    this.scene.input.keyboard.once("keydown-SPACE", () => {
      this.scene.isGameStarted = true;
      console.log("Game Started");
    });
  }

  registerRunAnimation() {
    this.anims.create({
      key: "dinoRun",
      frames: this.anims.generateFrameNames("dinoRun", { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}
