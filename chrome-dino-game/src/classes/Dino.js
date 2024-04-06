export default class Dino extends Phaser.Physics.Arcade.Sprite {
  constructor({ scene, x, y }) {
    super(scene, x, y, "dinoIdle");

    this.scene = scene;
    this.scene.physics.add.existing(this);
    this.scene.add.existing(this);

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    this.init();
    this.registerJumpListener();
    this.registerRunAnimation();
    this.registerDownAnimation();

    this.scene.events.on("update", () => {
      const spaceDownOnce = Phaser.Input.Keyboard.JustDown(this.cursors.space);
      const downArrowDownOnce = Phaser.Input.Keyboard.JustDown(
        this.cursors.down
      );
      const isOnGround = this.body.onFloor();

      if (spaceDownOnce && isOnGround) {
        this.setVelocityY(-1600);
      }

      if (downArrowDownOnce && isOnGround) {
        this.body.setSize(30, 30);
      }
    });
  }

  init() {
    this.setOrigin(0, 1).setCollideWorldBounds(true);
  }

  registerJumpListener() {
    this.scene.input.keyboard.once("keydown-SPACE", () => {
      this.scene.isGameStarted = true;
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

  registerDownAnimation() {
    this.anims.create({
      key: "dinoDown",
      frames: this.anims.generateFrameNames("dinoDown"),
      frameRate: 10,
      repeat: -1,
    });
  }

  playDinoAnimation() {
    this.body.height <= 58
      ? this.play("dinoDown", true)
      : this.play("dinoRun", true);
  }

  handleGameOver() {
    this.anims.pause();
    this.setTexture("dinoHurt");
  }
}
