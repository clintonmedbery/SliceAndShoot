import Phaser from "phaser";
import Boot from "./Scenes/Boot";
import Arena from "./Scenes/Arena";

const config = {
  title: "SliceAndShoot",
  width: 1024,
  height: 768,
  type: Phaser.AUTO,
  backgroundColor: "#88F",
  parent: "game-container",
  // "render": {"pixelArt": true},
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Boot, Arena]
};

// game.scene.add("Boot", Boot, true);
// game.scene.add("Arena", Arena);

const game = new Phaser.Game(config);

export default game;
