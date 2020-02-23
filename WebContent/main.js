window.addEventListener('load', function() {

	let game = new Phaser.Game({
    "title": "SliceAndShoot",
    "width": 1024,
    "height": 768,
    "type": Phaser.AUTO,
    "backgroundColor": "#88F",
    "parent": "game-container",
    // "render": {"pixelArt": true},
    "physics": {"default": "arcade"},
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    }
	});
	game.scene.add("Boot", Boot, true);
  game.scene.add("Arena", Arena);

});

class Boot extends Phaser.Scene {
  // constructor(config) {
  //   super(config);
  //
  // }
	preload() {
		this.load.pack("pack", "assets/pack.json");
    this.load.image('tiles', 'assets/tileset/space_tileset.png');
    // Load the export Tiled JSON
    this.load.tilemapTiledJSON('map', 'assets/tilemap/Arena.json');
	}

	create() {
    this.scene.start("Arena");
	}

}

class Arena extends Phaser.Scene {
  constructor() {
    super('Arena');
  }


  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'map' });

    const tileset = map.addTilesetImage('SpaceSet', 'tiles');
    console.log(map)
    const platforms = map.createStaticLayer('Platforms', tileset, 0, 0);
    platforms.setCollisionByExclusion(-1, true);
    
    console.log(platforms)
  }

  update() {

  }
}