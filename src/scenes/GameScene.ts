import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, KEYS, COLORS } from '@/utils/constants';
import Player from '@/entities/Player';

class GameScene extends Phaser.Scene {
  private m_player?: Player;
  private m_cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private m_keys?: Record<string, Phaser.Input.Keyboard.Key[]>;

  constructor() {
    super('GameScene');
  }

  create(): void {
    // 바닥 생성
    const ground = this.add.rectangle(
      GAME_WIDTH / 2,
      GAME_HEIGHT - 20,
      GAME_WIDTH,
      40,
      COLORS.green
    );
    this.physics.add.existing(ground, true);

    // 플레이어 생성
    this.m_player = new Player(this, GAME_WIDTH / 2, GAME_HEIGHT - 100);

    // 바닥과의 충돌
    this.physics.add.collider(this.m_player, ground);

    // 키보드 입력 설정
    this.m_cursors = this.input.keyboard?.createCursorKeys();

    // 커스텀 키 바인딩
    if (this.input.keyboard) {
      this.m_keys = {
        left: Object.values(this.input.keyboard.addKeys(KEYS.LEFT)),
        right: Object.values(this.input.keyboard.addKeys(KEYS.RIGHT)),
        jump: Object.values(this.input.keyboard.addKeys(KEYS.JUMP)),
      };
    }

    // 메뉴로 돌아가기 (ESC)
    if (this.input.keyboard) {
      this.input.keyboard.on('keydown-ESC', () => {
        this.scene.start('MainMenuScene');
      });
    }

    // HUD 텍스트
    this.add.text(10, 10, 'Arrow Keys or WASD to move | Space to jump | ESC to menu', {
      fontSize: '12px',
      color: '#ffffff',
    });
  }

  update(): void {
    if (!this.m_player) {
      return;
    }

    const isMovingLeft = this.CheckKeyPressed(this.m_keys?.left) || this.m_cursors?.left.isDown;
    const isMovingRight = this.CheckKeyPressed(this.m_keys?.right) || this.m_cursors?.right.isDown;
    const isJumping = this.CheckKeyPressed(this.m_keys?.jump) || this.m_cursors?.up.isDown;

    // 이동 처리
    if (isMovingLeft && !isMovingRight) {
      this.m_player.MoveLeft();
    } else if (isMovingRight && !isMovingLeft) {
      this.m_player.MoveRight();
    } else {
      this.m_player.Stop();
    }

    // 점프 처리
    if (isJumping) {
      this.m_player.Jump();
    }

    // 플레이어 업데이트
    this.m_player.Update();
  }

  private CheckKeyPressed(_keys?: Phaser.Input.Keyboard.Key[]): boolean {
    if (!_keys) {
      return false;
    }
    return _keys.some((key) => key.isDown);
  }
}

export default GameScene;
