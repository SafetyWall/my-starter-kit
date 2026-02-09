import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, COLORS } from '@/utils/constants';

class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  create(): void {
    // 타이틀 텍스트
    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 80, 'Game Starter Kit', {
        fontSize: '48px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5, 0.5);

    // 버튼 컨테이너
    const buttonContainer = this.add.container(
      GAME_WIDTH / 2,
      GAME_HEIGHT / 2 + 50
    );

    // 버튼 배경
    const buttonBg = this.add.rectangle(0, 0, 120, 50, COLORS.blue);
    buttonContainer.add(buttonBg);

    // 버튼 텍스트
    const buttonText = this.add.text(0, 0, 'Start', {
      fontSize: '20px',
      color: '#ffffff',
    });
    buttonText.setOrigin(0.5, 0.5);
    buttonContainer.add(buttonText);

    // 컨테이너에 interactive 설정
    buttonContainer.setInteractive(
      new Phaser.Geom.Rectangle(-60, -25, 120, 50),
      Phaser.Geom.Rectangle.Contains
    );
    buttonContainer.setInteractive({ useHandCursor: true });

    buttonContainer.on('pointerover', () => {
      buttonBg.setFillStyle(0x0066ff);
    });

    buttonContainer.on('pointerout', () => {
      buttonBg.setFillStyle(COLORS.blue);
    });

    buttonContainer.on('pointerup', () => {
      this.scene.start('GameScene');
    });
  }
}

export default MainMenuScene;
