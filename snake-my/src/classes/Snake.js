import { DIRECTIONS } from "../utils";

export default class Snake {
  constructor({ scene, x, y }) {
    this.scene = scene;
    this.headPosition = new Phaser.Geom.Point(x, y);

    this.body = scene.add.group();
    this.head = this.scene.add
      .rectangle(x * 16, y * 16, 20, 20, 0xff0000)
      .setOrigin(0);

    this.body.add(this.head);

    this.alive = true;
    this.speed = 100;
    this.moveTime = 0;
    this.heading = DIRECTIONS.RIGHT;
    this.direction = DIRECTIONS.RIGHT;
  }

  update(time) {
    if (time >= this.moveTime) {
      return this.move(time);
    }
  }

  faceLeft() {
    if (
      this.direction === DIRECTIONS.UP ||
      this.direction === DIRECTIONS.DOWN
    ) {
      this.heading = DIRECTIONS.LEFT;
    }
  }

  faceRight() {
    if (
      this.direction === DIRECTIONS.UP ||
      this.direction === DIRECTIONS.DOWN
    ) {
      this.heading = DIRECTIONS.RIGHT;
    }
  }

  faceUp() {
    if (
      this.direction === DIRECTIONS.LEFT ||
      this.direction === DIRECTIONS.RIGHT
    ) {
      this.heading = DIRECTIONS.UP;
    }
  }

  faceDown() {
    if (
      this.direction === DIRECTIONS.LEFT ||
      this.direction === DIRECTIONS.RIGHT
    ) {
      this.heading = DIRECTIONS.DOWN;
    }
  }

  move(time) {
    /**
     * Based on the heading property (which is the direction the pgroup pressed)
     * we update the headPosition value accordingly.
     *
     * The Math.wrap call allow the snake to wrap around the screen, so when
     * it goes off any of the sides it re-appears on the other.
     */
    console.log("meow", this.headPosition.x);
    switch (this.heading) {
      case DIRECTIONS.LEFT:
        this.headPosition.x = Phaser.Math.Wrap(
          this.headPosition.x - 1,
          0,
          this.scene.scale.width / 16
        );
        break;

      case DIRECTIONS.RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(
          this.headPosition.x + 1,
          0,
          this.scene.scale.width / 16
        );
        break;

      case DIRECTIONS.UP:
        this.headPosition.y = Phaser.Math.Wrap(
          this.headPosition.y - 1,
          0,
          this.scene.scale.height / 16
        );
        break;

      case DIRECTIONS.DOWN:
        this.headPosition.y = Phaser.Math.Wrap(
          this.headPosition.y + 1,
          0,
          this.scene.scale.height / 16
        );
        break;
    }

    this.direction = this.heading;

    //  Update the body segments
    Phaser.Actions.ShiftPosition(
      this.body.getChildren(),
      this.headPosition.x * 16,
      this.headPosition.y * 16,
      1
    );

    //  Update the timer ready for the next movement
    this.moveTime = time + this.speed;

    return true;
  }
}
