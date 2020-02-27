import Phaser from "phaser";
import advenAtlasPng from "../Assets/Atlas/advenAtlas.png";
import advenAtlasJson from "../Assets/Atlas/advenAtlas.json";
import Player from "../Objects/Player";

class Arena extends Phaser.Scene {
  constructor() {
    super("Arena");
  }

  preload() {
    console.log("Preloading Arena");
    this.load.atlas('player', advenAtlasPng, advenAtlasJson);

  }

  create() {
    const map = this.make.tilemap({ key: "map" });

    const tileset = map.addTilesetImage("SpaceSet", "tiles");
    console.log(map);
    const platforms = map.createStaticLayer("Platforms", tileset, 0, 0);
    platforms.setCollisionByExclusion(-1, true);

    console.log(platforms);

    this.player = this.physics.add.sprite(100, 300, 'player');
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, platforms);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'adventurer-idle-0',
        start: 0,
        end: 1,
      }),
      frameRate: 2,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.play('idle', true);
    this.go = new Player(this)
  }

  update() {
    // Control the player with left or right keys
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
      if (this.player.body.onFloor()) {
        this.player.play('walk', true);
      }
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
      if (this.player.body.onFloor()) {
        this.player.play('walk', true);
      }
    } else {
      // If no keys are pressed, the player keeps still
      this.player.setVelocityX(0);
      // Only show the idle animation if the player is footed
      // If this is not included, the player would look idle while jumping
      if (this.player.body.onFloor()) {
        this.player.play('idle', true);
      }
    }

// Player can jump while walking any direction by pressing the space bar
// or the 'UP' arrow
    if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
      this.player.setVelocityY(-350);
      this.player.play('jump', true);
    }

    if (this.player.body.velocity.x > 0) {
      this.player.setFlipX(false);
    } else if (this.player.body.velocity.x < 0) {
      // otherwise, make them face the other side
      this.player.setFlipX(true);
    }
  }

}

export default Arena;
