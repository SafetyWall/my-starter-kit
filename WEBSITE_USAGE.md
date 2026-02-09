# 🌐 웹사이트 사용 가이드

## ✅ 테스트 완료 상태

모든 페이지가 **정상 작동**합니다.

### ✓ 해결된 문제

1. **vite.svg 404 에러** - 파일 참조 제거 완료
2. **게임 JS 경로 문제** - 절대경로 → 상대경로 수정 완료
3. **모든 리소스 로드** - HTML, CSS, JS, 게임 모듈 정상 로드

---

## 🚀 로컬에서 테스트하기

### 1단계: 빌드 및 준비
```bash
npm run build:website
```

### 2단계: 서버 시작
```bash
npm run serve:website
```

또는 Python 사용:
```bash
cd website
python -m http.server 8080
```

### 3단계: 브라우저에서 접속

**로컬**: `http://localhost:8080`
**네트워크**: `http://127.0.0.1:8080`

---

## 📄 페이지 구성

### 🏠 메인 페이지 (index.html)

**URL**: `http://localhost:8080/`

**구성:**
- Hero 섹션 - 프로젝트 소개
- Features - 4개 주요 특징
- Quick Start - 설치 가이드
- Demo - 게임 설명
- Why Choose - 가치 제안
- Footer - 링크 및 라이선스

### 🎮 데모 페이지 (demo.html)

**URL**: `http://localhost:8080/demo.html`

**구성:**
- 게임 iframe (800x600)
- 컨트롤 가이드
- 게임 흐름 설명
- 돌아가기 버튼

### 🎯 게임 (game/index.html)

**URL**: `http://localhost:8080/game/`

**구성:**
- Phaser 게임 엔진
- 게임 장면 (Boot → Menu → Game)
- 플레이어 이동 및 점프 기능

---

## 📊 로드된 리소스

### HTML 파일
✅ index.html (11KB)
✅ demo.html (3.2KB)
✅ game/index.html (0.9KB)

### CSS 파일
✅ css/main.css (5.7KB)
✅ css/landing.css (5.5KB)
✅ css/demo.css (3.6KB)

### JavaScript 파일
✅ js/main.js (2.8KB)
✅ game/assets/index-B5-U8ciM.js (1.4MB)

### 총 크기
**원본**: ~1.5MB
**Gzip**: ~330KB

---

## 🎮 게임 컨트롤

페이지 접속 후 "라이브 데모 보기" 또는 demo.html로 이동하여 게임을 플레이할 수 있습니다.

**키보드 컨트롤:**
- `←` `→` / `A` `D` - 좌우 이동
- `SPACE` / `W` - 점프
- `ESC` - 메뉴로 돌아가기

---

## 📱 반응형 디자인

모든 페이지가 반응형으로 설계되었습니다.

**지원 화면:**
- 📱 모바일 (320px+)
- 📱 태블릿 (768px+)
- 🖥️ 데스크톱 (1024px+)

---

## 🔧 커스터마이징

### 색상 변경

`website/css/main.css` 수정:
```css
:root {
  --primary: #4a90e2;      /* 주 색상 */
  --secondary: #50c878;    /* 보조 색상 */
  --dark-bg: #1a1a1a;      /* 배경색 */
  /* ... 기타 색상 */
}
```

### 텍스트/컨텐츠 변경

- **index.html**: 직접 HTML 편집
- **demo.html**: iframe src 또는 설명 수정

### 게임 이미지 추가

`website/game/assets/`에 파일 추가:
- `sprites/` - 게임 이미지
- `audio/` - 사운드 파일
- `fonts/` - 폰트 파일

---

## 📦 배포하기

### GitHub Pages

1. `website/` 폴더 내용을 저장소 루트로 이동
2. GitHub Pages 활성화 (Settings → Pages)
3. Source: main branch, `website` folder

### Vercel/Netlify

```bash
npm run build:website
# website/ 폴더 배포
```

### 커스텀 서버

모든 HTTP 상태가 200 OK이므로 모든 정적 호스팅에서 작동합니다.

---

## 🐛 문제 해결

### 게임이 로드되지 않음
1. 브라우저 개발자 도구 (F12) 콘솔 확인
2. `game/assets/index-B5-U8ciM.js` 파일 확인
3. 서버 재시작: `npm run serve:website`

### 스타일이 적용되지 않음
- 브라우저 캐시 삭제 (Ctrl+F5)
- CSS 파일 경로 확인
- 콘솔에서 CSS 로드 에러 확인

### 폰트가 로드되지 않음
- 인터넷 연결 확인 (Google Fonts 필요)
- 브라우저 콘솔에서 CORS 에러 확인

---

## 📄 더 알아보기

- [웹사이트 README](website/README.md)
- [테스트 보고서](website/TEST_REPORT.md)
- [Phaser 문서](https://phaser.io)
- [TypeScript 문서](https://www.typescriptlang.org)
- [Vite 가이드](https://vitejs.dev)

---

## 📞 지원

문제가 발생하면:
1. 테스트 보고서 확인
2. 브라우저 콘솔 에러 로그 확인
3. 서버 로그 확인
4. 파일 경로 재확인

