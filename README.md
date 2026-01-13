# YS AN - Robotics Engineer Portfolio

로봇 공학자를 위한 개인 포트폴리오 웹사이트입니다.

## 🚀 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 완벽하게 작동
- **섹션 구성**:
  - Home: 소개 및 CV/명함 다운로드
  - About: 자기소개 및 기술 스택
  - Projects: 노션 포트폴리오 및 Tistory 블로그 링크
  - Organizations: 소속 기관 정보 (이미지/링크 지원)
  - Contact: 연락처 정보 및 메시지 폼

- **다운로드 기능**:
  - CV 다운로드
  - 명함 다운로드

- **외부 링크 통합**:
  - 노션 포트폴리오: https://mosw.notion.site/
  - Tistory 블로그: https://mosw.tistory.com/
  - GitHub: https://github.com/MOSW626

## 📦 설치 및 실행

### 필수 요구사항
- Node.js (v14 이상)
- npm 또는 yarn

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm start
```
브라우저에서 http://localhost:3000 을 열어 확인할 수 있습니다.

### 프로덕션 빌드
```bash
npm run build
```

## 🚀 GitHub Pages 배포

### 배포 설정
1. `package.json`의 `homepage` 필드를 확인하세요:
   ```json
   "homepage": "https://mosw626.github.io/ys-an.github.io"
   ```

2. 배포 실행:
   ```bash
   npm run deploy
   ```

### 수동 배포
1. 빌드:
   ```bash
   npm run build
   ```

2. `build` 폴더의 내용을 GitHub Pages에 업로드

## 📝 커스터마이징

### CV 및 명함 파일 추가
1. `public/assets/` 폴더에 파일 추가:
   - `CV.pdf` (또는 원하는 형식)
   - `BusinessCard.pdf` (또는 원하는 형식)

2. `src/components/Home.js`에서 파일 경로 확인:
   ```javascript
   link.href = '/assets/CV.pdf';
   link.download = 'YS_AN_CV.pdf';
   ```

### 소속 기관 정보 수정
`src/components/Organizations.js` 파일에서 `organizations` 배열을 수정하세요:

```javascript
const organizations = [
  {
    name: '기관 이름',
    role: '역할/직책',
    period: '기간',
    description: '설명',
    image: '/assets/organization1.png', // 이미지가 있는 경우
    link: 'https://example.com',
    type: 'university' // 'university', 'company', 'research'
  }
];
```

### 색상 테마 변경
주요 색상은 CSS 파일에서 그라데이션으로 정의되어 있습니다:
- Primary: `#667eea` → `#764ba2`
- Secondary: `#f093fb` → `#f5576c`

각 컴포넌트의 CSS 파일에서 색상을 수정할 수 있습니다.

## 🛠 기술 스택

- React 18
- React Bootstrap
- React Router
- React Icons
- React Typed (타이핑 애니메이션)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 사용됩니다.

## 📧 연락처

- Email: ays6533@naver.com
- GitHub: [MOSW626](https://github.com/MOSW626)
- Notion: [포트폴리오](https://mosw.notion.site/)
- Blog: [Tistory](https://mosw.tistory.com/)

