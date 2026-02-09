import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, BACKGROUND_COLOR } from '@/utils/constants';
import BootScene from '@/scenes/BootScene';
import MainMenuScene from '@/scenes/MainMenuScene';
import GameScene from '@/scenes/GameScene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: BACKGROUND_COLOR,
  parent: 'app',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 300 },
      debug: false,
    },
  },
  scene: [BootScene, MainMenuScene, GameScene],
};

export default gameConfig;
