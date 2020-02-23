import Phaser from "phaser";

import spaceTileset from "../assets/tileset/space_tileset.png";
import arenaMap from "../assets/tilemap/Arena.json";

class Boot extends Phaser.Scene {
  preload() {
    this.load.image("tiles", spaceTileset);
    // Load the export Tiled JSON
    this.load.tilemapTiledJSON("map", arenaMap);
  }

  create() {
    this.scene.start("Arena");
  }
}

export default Boot;
