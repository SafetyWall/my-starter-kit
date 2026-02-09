import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload(): void {
    // 게임 에셋 로딩
    // this.load.image('player', 'assets/sprites/player.png')
    // this.load.audio('jump', 'assets/audio/jump.mp3')
  }

  create(): void {
    // 로딩 완료, 메뉴 씬으로 이동
    this.scene.start('MainMenuScene');
  }
}

export default BootScene;
