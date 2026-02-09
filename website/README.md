# 웹 게임 스타터킷 - 랜딩 페이지 웹사이트

Phaser + TypeScript + Vite 스타터킷을 소개하는 정적 랜딩 페이지입니다.

## 📁 디렉토리 구조

```
website/
├── index.html           # 메인 랜딩 페이지
├── demo.html            # 라이브 게임 데모 페이지
├── css/
│   ├── main.css         # 공통 스타일 (리셋, 변수, 레이아웃)
│   ├── landing.css      # 랜딩 페이지 전용 스타일
│   └── demo.css         # 데모 페이지 전용 스타일
├── js/
│   └── main.js          # 인터랙션 (부드러운 스크롤, 애니메이션)
├── game/                # 빌드된 게임 (dist/ 복사본)
│   ├── index.html
│   ├── assets/
│   │   ├── index-*.js   # 컴파일된 게임 로직
│   │   ├── sprites/
│   │   ├── audio/
│   │   └── fonts/
│   └── ...
└── README.md            # 이 파일
```

## 🚀 빠른 시작

### 1. 게임 빌드 및 웹사이트 준비

```bash
npm run build:website
```

이 명령어는:
1. 게임을 프로덕션 빌드 (`npm run build`)
2. `dist/` 내용을 `website/game/`으로 복사

### 2. 로컬 테스트

```bash
npm run serve:website
```

브라우저에서 `http://localhost:8080` 접속

또는 Python:
```bash
cd website
python -m http.server 8080
```

그 후 `http://localhost:8080` 접속

## 📄 페이지 구성

### index.html - 랜딩 페이지

**섹션:**

1. **헤더/네비게이션** - 프로젝트 이름과 섹션 네비게이션
2. **Hero** - 프로젝트 소개 및 CTA 버튼
   - "라이브 데모 보기" → demo.html
   - "GitHub에서 보기" → GitHub 링크
3. **Features** - 4개 기능 카드
   - Phaser 3.85.0
   - TypeScript 5.x
   - Vite 5.x
   - Scene 기반 아키텍처
4. **Quick Start** - 3단계 설치 가이드
   - 의존성 설치
   - 개발 서버 실행
   - 프로덕션 빌드
5. **Demo** - 게임 설명 및 데모 링크
6. **Features Deep Dive** - 4개 가치 제안 카드
7. **Footer** - 링크 및 라이선스

### demo.html - 데모 페이지

**구성:**

1. **헤더** - 돌아가기 링크
2. **게임 iframe** - 800x600 게임 컨테이너
3. **컨트롤 가이드** - 키보드 컨트롤 설명
4. **돌아가기 버튼** - 랜딩 페이지로 이동
5. **Footer** - 링크 및 라이선스

## 🎨 스타일 시스템

### CSS 변수 (main.css)

```css
--primary: #4a90e2          /* 주 색상 (파란색) */
--secondary: #50c878        /* 보조 색상 (초록색) */
--dark-bg: #1a1a1a          /* 배경색 */
--section-bg: #2d2d2d       /* 섹션 배경 */
--text: #ffffff             /* 기본 텍스트 색 */
--text-muted: #a0a0a0       /* 연한 텍스트 색 */
--code-bg: #0d1117          /* 코드 블록 배경 */
```

### 폰트

- **Display** (제목): Poppins (600, 700, 800)
- **Body** (본문): Inter (400, 500, 600, 700)
- **Mono** (코드): Fira Code (400, 500, 700)

## 📱 반응형 디자인

- **데스크톱** (1200px+): 4컬럼 Features 그리드
- **태블릿** (768px-1199px): 2컬럼 그리드, 축소된 폰트
- **모바일** (480px-767px): 1컬럼, 버튼 전폭
- **소형 모바일** (<480px): 추가 최적화

## ✨ 주요 기능

### 부드러운 스크롤
- 내부 링크 클릭 시 부드러운 스크롤
- `behavior: smooth` 활용

### 진입 애니메이션
- Intersection Observer로 섹션 감지
- fadeInUp 애니메이션 적용

### 네비게이션 하이라이트
- 현재 스크롤 위치에 따라 활성 링크 표시

### iframe 게임
- 800x600 게임을 iframe에 포함
- 게임 로딩 상태 표시
- 오류 처리

## 🔧 커스터마이징

### 색상 변경

`css/main.css`의 `:root` CSS 변수 수정:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* ... */
}
```

### 폰트 변경

Google Fonts 링크 수정 또는 로컬 폰트 추가

### 컨텐츠 수정

- **index.html**: 텍스트, 버튼, 섹션 직접 편집
- **demo.html**: 컨트롤 가이드, 설명 텍스트 수정

### 게임 경로

demo.html에서 iframe src 변경:
```html
<iframe src="game/index.html" ...></iframe>
```

## 📦 배포

### GitHub Pages

1. `website/` 폴더를 저장소 루트로 설정
2. GitHub Pages 활성화 (Settings → Pages)
3. Source: main branch, `website` folder 선택

### 정적 호스팅 (Vercel, Netlify 등)

```bash
npm run build:website
# website/ 폴더 배포
```

### 커스텀 서버

모든 요청을 `index.html`로 리다이렉트 필요 (SPA 라우팅 미적용)

## ⚡ 성능 최적화

- CSS 압축 (프로덕션에서)
- Google Fonts 서브셋
- 게임 파일 gzip 압축 (1.4MB → 327KB)

## 🐛 트러블슈팅

### 게임이 로드되지 않음

1. `website/game/assets/index-*.js` 파일 확인
2. `demo.html`의 iframe src 경로 확인
3. 브라우저 콘솔에서 에러 확인

### 스타일이 적용되지 않음

- CSS 파일 경로 확인
- 브라우저 캐시 삭제 (Ctrl+F5)
- 콘솔에서 CSS 로드 에러 확인

### 폰트가 로드되지 않음

- Google Fonts 연결 확인
- 네트워크 상태 확인
- 브라우저 콘솔에서 CORS 에러 확인

## 📄 라이선스

MIT

## 🔗 관련 링크

- [Phaser 문서](https://photonstorm.github.io/phaser3-docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite 가이드](https://vitejs.dev/guide/)
- [Game Starter Kit 저장소](https://github.com/anthropics/phaser-starter)
