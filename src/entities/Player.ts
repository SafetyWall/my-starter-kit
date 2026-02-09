import Phaser from 'phaser';
import {
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_SPEED,
  PLAYER_JUMP_VELOCITY,
  COLORS,
} from '@/utils/constants';

class Player extends Phaser.Physics.Arcade.Sprite {
  private m_velocityX = 0;

  constructor(scene: Phaser.Scene, _x: number, _y: number) {
    // 플레이스홀더 그래픽 (실제 프로젝트에서는 이미지로 대체)
    super(scene, _x, _y, '');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // 플레이어 외형 설정
    this.setSize(PLAYER_WIDTH, PLAYER_HEIGHT);
    this.setOrigin(0.5, 1);

    // 플레이스홀더 박스 생성
    const graphics = scene.make.graphics({ x: 0, y: 0 });
    graphics.fillStyle(COLORS.red, 1);
    graphics.fillRect(0, 0, PLAYER_WIDTH, PLAYER_HEIGHT);
    graphics.generateTexture('playerTexture', PLAYER_WIDTH, PLAYER_HEIGHT);
    graphics.destroy();

    this.setTexture('playerTexture');
    this.setBounce(0);
  }

  Update(): void {
    // 공중에 있을 때만 중력 적용
    if (!this.body?.touching.down) {
      this.m_velocityX *= 0.98; // 공중 마찰
    }

    // 수평 속도 설정
    if (this.body && 'setVelocityX' in this.body) {
      (this.body as Phaser.Physics.Arcade.Body).setVelocityX(this.m_velocityX);
    }

    // 화면 경계 처리
    if (this.x < 0) {
      this.setX(0);
    }
    if (this.x > 800) {
      this.setX(800);
    }
  }

  MoveLeft(): void {
    this.m_velocityX = -PLAYER_SPEED;
  }

  MoveRight(): void {
    this.m_velocityX = PLAYER_SPEED;
  }

  Jump(): void {
    if (this.body?.touching.down && 'setVelocityY' in this.body) {
      (this.body as Phaser.Physics.Arcade.Body).setVelocityY(PLAYER_JUMP_VELOCITY);
    }
  }

  Stop(): void {
    this.m_velocityX = 0;
  }
}

export default Player;
