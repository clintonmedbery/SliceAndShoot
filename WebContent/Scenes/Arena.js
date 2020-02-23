
class Arena extends Phaser.Scene {
  constructor() {
    super('arena');
  }


  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'map' });

    const tileset = map.addTilesetImage('SpaceSet', 'tiles');
    console.log(map)
    const platforms = map.createStaticLayer('Platforms', tileset, 0, 200);
    console.log(platforms)
  }

  update() {

  }
}

export default Arena;