# 웹 게임 스타터킷 (Game Starter Kit)

프로토타입 개발을 위한 2D 웹 게임 스타터킷입니다. **최소한의 설정으로 빠르게 게임 개발을 시작**할 수 있습니다.

## 🚀 주요 특징

- **Phaser 3.85.0** - 풍부한 기능의 2D 게임 엔진
- **TypeScript 5.x** - 타입 안전성을 통한 안정적인 개발
- **Vite 5.x** - 빠른 개발 서버와 즉시 HMR
- **Scene 기반 아키텍처** - 확장 가능한 구조
- **Entity 시스템** - 게임 오브젝트 관리 용이

## 📦 설치

### 필수 요구사항
- Node.js 18+
- pnpm (권장) 또는 npm

### 설치 방법

```bash
# 1. 의존성 설치
pnpm install

# 2. 개발 서버 실행
pnpm dev

# 브라우저가 자동으로 http://localhost:3000 에서 열립니다
```

## 🎮 개발 시작

### 개발 서버
```bash
pnpm dev
```
- 자동으로 브라우저 열기
- 코드 변경 시 즉시 리로드 (HMR)

### 프로덕션 빌드
```bash
pnpm build
```
- `dist/` 디렉토리에 최적화된 빌드 생성

### 빌드 미리보기
```bash
pnpm preview
```

### 코드 품질 검사
```bash
pnpm lint      # ESLint 실행
pnpm format    # Prettier로 코드 포맷팅
```

## 📁 프로젝트 구조

```
src/
├── main.ts                      # 애플리케이션 엔트리
├── config/
│   └── gameConfig.ts            # Phaser 게임 설정
├── scenes/
│   ├── BootScene.ts             # 에셋 로딩 씬
│   ├── MainMenuScene.ts         # 메인 메뉴
│   └── GameScene.ts             # 메인 게임 씬
├── entities/
│   └── Player.ts                # 플레이어 엔티티 예제
└── utils/
    └── constants.ts             # 게임 상수

public/
└── assets/
    ├── sprites/                 # 스프라이트 이미지
    ├── audio/                   # 사운드 파일
    └── fonts/                   # 폰트 파일
```

## 🎯 기본 게임플레이

### 컨트롤
- **방향키** 또는 **WASD** - 플레이어 이동
- **스페이스** 또는 **W** - 점프
- **ESC** - 메뉴로 돌아가기

### 게임 흐름
1. **BootScene** - 에셋 로딩
2. **MainMenuScene** - 메뉴 화면 (Start 버튼 클릭으로 시작)
3. **GameScene** - 메인 게임 씬 (플레이어 이동 및 점프 가능)

## 🛠️ 커스터마이징 가이드

### 새 Scene 추가하기

```typescript
// src/scenes/MyScene.ts
import Phaser from 'phaser'

class MyScene extends Phaser.Scene {
  constructor() {
    super('MyScene')
  }

  create(): void {
    // 씬 초기화
  }

  update(): void {
    // 매 프레임 실행
  }
}

export default MyScene
```

그 다음 `src/config/gameConfig.ts`의 `scene` 배열에 추가:

```typescript
scene: [BootScene, MainMenuScene, MyScene, GameScene]
```

### 새 Entity 추가하기

```typescript
// src/entities/MyEntity.ts
import Phaser from 'phaser'

class MyEntity extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, _x: number, _y: number) {
    super(scene, _x, _y, 'texture-key')
    scene.add.existing(this)
    scene.physics.add.existing(this)
  }

  Update(): void {
    // 매 프레임 업데이트 로직
  }
}

export default MyEntity
```

### 게임 설정 변경

`src/config/gameConfig.ts`에서:
- **게임 크기**: `width`, `height`
- **물리 엔진**: `physics.arcade`
- **배경색**: `backgroundColor`

### 상수 커스터마이징

`src/utils/constants.ts`에서:
- 게임 화면 크기
- 플레이어 이동 속도
- 키 바인딩
- 색상 정의

## 📚 학습 자료

### Phaser 공식 문서
- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [Phaser Examples](https://phaser.io/examples)

### TypeScript 기초
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Vite 문서
- [Vite Guide](https://vitejs.dev/guide/)

## 🐛 일반적인 문제 해결

### 포트 3000이 이미 사용 중인 경우
`vite.config.ts`에서 포트 변경:
```typescript
server: {
  port: 3001, // 포트 번호 변경
}
```

### TypeScript 에러 발생
IDE에서 TypeScript 서버 재시작 (보통 Ctrl+Shift+P → "TypeScript: Restart TS Server")

### 게임이 화면에 표시되지 않음
- 콘솔에서 에러 메시지 확인
- `src/main.ts`에서 `gameConfig` 불러오기 확인

## 📝 라이선스

MIT

## 💡 팁

- **프로토타입 개발**: 빠른 반복 개발을 위해 HMR 활용
- **성능 최적화**: 측정 후에만 최적화 진행
- **타입 안전성**: TypeScript strict mode 활용으로 런타임 에러 방지
