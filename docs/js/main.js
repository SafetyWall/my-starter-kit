// 부드러운 스크롤 링크 처리
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Intersection Observer - 섹션 진입 시 애니메이션
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 섹션 요소들에 observer 적용
document.querySelectorAll('section').forEach((section) => {
  section.style.opacity = '0';
  observer.observe(section);
});

// fadeInUp 애니메이션 정의
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// 네비게이션 활성화 상태 관리
function updateNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

// 네비게이션이 있는 경우에만 실행
if (document.querySelector('nav')) {
  updateNavigation();
}

// iframe 로드 에러 처리
function setupGameIframe() {
  const iframe = document.querySelector('.game-container iframe');
  if (!iframe) return;

  const gameLoading = document.querySelector('.game-loading');
  if (gameLoading) {
    iframe.addEventListener('load', () => {
      gameLoading.style.display = 'none';
    });

    iframe.addEventListener('error', () => {
      if (gameLoading) {
        gameLoading.innerHTML =
          '<div style="color: #e74c3c;">게임을 로드할 수 없습니다. 경로를 확인해주세요.</div>';
      }
    });
  }
}

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', () => {
  setupGameIframe();
});
