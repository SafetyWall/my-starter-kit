// 게임 화면 설정
export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;

// 게임 배경색
export const BACKGROUND_COLOR = '#222222';

// 플레이어 설정
export const PLAYER_WIDTH = 32;
export const PLAYER_HEIGHT = 48;
export const PLAYER_SPEED = 200;
export const PLAYER_JUMP_VELOCITY = -400;

// 키 바인딩
export const KEYS = {
  LEFT: ['A', 'ArrowLeft'],
  RIGHT: ['D', 'ArrowRight'],
  JUMP: ['W', 'Space', 'ArrowUp'],
} as const;

// 색상 상수
export const COLORS = {
  white: 0xffffff,
  black: 0x000000,
  red: 0xff0000,
  green: 0x00ff00,
  blue: 0x0000ff,
  gray: 0x888888,
} as const;
