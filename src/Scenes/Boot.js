import Phaser from "phaser";

import spaceTileset from "../Assets/Tileset/space_tileset.png";
import arenaMap from "../Assets/Tilemap/Arena.json";
import advenAtlasPng from "../Assets/Atlas/advenAtlas.png";
import advenAtlasJson from "../Assets/Atlas/advenAtlas.json";

class Boot extends Phaser.Scene {
  preload() {
    this.load.image("tiles", spaceTileset);
    // Load the export Tiled JSON
    this.load.tilemapTiledJSON("map", arenaMap);
    this.load.atlas("player", advenAtlasPng, advenAtlasJson);
  }

  create() {
    this.scene.start("Arena");
  }
}

export default Boot;
