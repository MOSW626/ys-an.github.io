# 포트폴리오 설정 가이드

## 🎯 빠른 시작

### 1. 의존성 설치
```bash
cd /Users/an-yeonsu/Documents/GitHub/ys-an.github.io
npm install
```

### 2. 개발 서버 실행
```bash
npm start
```
브라우저에서 http://localhost:3000 을 열어 확인하세요.

## 📝 커스터마이징 가이드

### CV 및 명함 파일 추가

1. **파일 준비**
   - CV 파일: PDF, DOCX, PNG 등 원하는 형식
   - 명함 파일: PDF, PNG, JPG 등 원하는 형식

2. **파일 추가**
   ```bash
   # public/assets/ 폴더에 파일 추가
   cp /path/to/your/CV.pdf public/assets/CV.pdf
   cp /path/to/your/BusinessCard.pdf public/assets/BusinessCard.pdf
   ```

3. **파일 형식이 다른 경우**
   `src/components/Home.js` 파일을 수정하세요:
   ```javascript
   // 예: PNG 형식인 경우
   link.href = process.env.PUBLIC_URL + '/assets/CV.png';
   link.download = 'YS_AN_CV.png';
   ```

### 소속 기관 정보 수정

`src/components/Organizations.js` 파일을 열어서 수정하세요:

```javascript
const organizations = [
  {
    name: '실제 기관 이름',
    role: '연구원 / 학생 / 개발자 등',
    period: '2020 - 2024',
    description: '상세한 설명을 작성하세요',
    image: '/assets/organization1.png', // 이미지가 있으면
    // 또는 image: null, // 이미지가 없으면 아이콘 표시
    link: 'https://기관웹사이트.com',
    type: 'university' // 'university', 'company', 'research'
  }
];
```

**이미지 추가 방법:**
1. 기관 로고 이미지를 `public/assets/` 폴더에 저장
2. `image` 필드에 경로 지정: `'/assets/organization1.png'`

**링크만 있는 경우:**
- `image: null`로 설정하면 아이콘이 표시됩니다
- `link` 필드에 기관 웹사이트 URL을 입력하세요

### About 섹션 수정

`src/components/About.js` 파일에서:
- 자기소개 텍스트 수정
- 기술 스택 카드 수정

### 프로젝트 섹션 수정

`src/components/Projects.js` 파일에서:
- 노션, Tistory 링크는 이미 설정되어 있습니다
- 추가 프로젝트가 있으면 배열에 추가하세요

### 색상 테마 변경

각 컴포넌트의 CSS 파일에서 색상을 수정할 수 있습니다:

**주요 색상:**
- Primary Gradient: `#667eea` → `#764ba2`
- Secondary Gradient: `#f093fb` → `#f5576c`

**색상 변경 위치:**
- `src/App.css`: 버튼 스타일
- `src/components/Home.css`: 홈 섹션 배경
- `src/components/Header.css`: 네비게이션 바
- `src/components/Footer.css`: 푸터 배경

## 🚀 배포

### GitHub Pages 배포

1. **빌드 및 배포**
   ```bash
   npm run deploy
   ```

2. **GitHub 저장소 설정**
   - Settings → Pages
   - Source: `gh-pages` 브랜치
   - 경로: `/ (root)`

3. **자동 배포 (선택사항)**
   - `.github/workflows/deploy.yml` 파일이 이미 설정되어 있습니다
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다

자세한 내용은 `DEPLOYMENT.md` 파일을 참고하세요.

## 📁 프로젝트 구조

```
ys-an.github.io/
├── public/
│   ├── assets/          # CV, 명함, 이미지 파일
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Organizations.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## ✅ 체크리스트

배포 전 확인사항:

- [ ] CV 파일을 `public/assets/CV.pdf`에 추가
- [ ] 명함 파일을 `public/assets/BusinessCard.pdf`에 추가
- [ ] 소속 기관 정보를 `Organizations.js`에서 수정
- [ ] About 섹션의 자기소개 수정
- [ ] 연락처 정보 확인 (이미 설정되어 있음)
- [ ] 로컬에서 테스트 (`npm start`)
- [ ] 빌드 테스트 (`npm run build`)
- [ ] GitHub Pages 배포

## 🐛 문제 해결

### 파일이 다운로드되지 않는 경우
- `public/assets/` 폴더에 파일이 있는지 확인
- 파일 이름과 경로가 정확한지 확인
- 브라우저 개발자 도구에서 콘솔 에러 확인

### 이미지가 표시되지 않는 경우
- 이미지 파일이 `public/assets/` 폴더에 있는지 확인
- 경로가 `/assets/filename.ext` 형식인지 확인
- 파일 확장자가 올바른지 확인

### 스타일이 깨지는 경우
- 브라우저 캐시를 지우고 새로고침
- `npm run build` 후 다시 배포

## 📧 추가 도움이 필요한 경우

- Email: ays6533@naver.com
- GitHub: https://github.com/MOSW626

