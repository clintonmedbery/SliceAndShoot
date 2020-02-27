import Phaser from "phaser";

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, "player");
  }

  preload() {
    console.log("Preloading GO");
  }

  create() {}

  update() {}
}

export default Player;
