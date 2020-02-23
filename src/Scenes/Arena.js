import Phaser from "phaser";

class Arena extends Phaser.Scene {
  constructor() {
    super("Arena");
  }

  preload() {}

  create() {
    const map = this.make.tilemap({ key: "map" });

    const tileset = map.addTilesetImage("SpaceSet", "tiles");
    console.log(map);
    const platforms = map.createStaticLayer("Platforms", tileset, 0, 0);
    platforms.setCollisionByExclusion(-1, true);

    console.log(platforms);
  }

  update() {}
}

export default Arena;
