import Phaser from "phaser";
import advenAtlasPng from "../Assets/Atlas/advenAtlas.png";
import advenAtlasJson from "../Assets/Atlas/advenAtlas.json";

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, "player");

  }

  preload() {
    console.log("Preloading GO");


  }

  create() {


  }

  update() {

  }

}

export default Player;
