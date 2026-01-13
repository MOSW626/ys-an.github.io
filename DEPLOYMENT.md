# 배포 가이드

## GitHub Pages 배포 방법

### 방법 1: npm deploy 스크립트 사용 (권장)

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **빌드 및 배포**
   ```bash
   npm run deploy
   ```

   이 명령어는 자동으로:
   - 프로젝트를 빌드합니다 (`npm run build`)
   - `gh-pages` 브랜치에 배포합니다

3. **GitHub 저장소 설정**
   - GitHub 저장소로 이동
   - Settings → Pages
   - Source를 `gh-pages` 브랜치로 설정
   - `/ (root)` 선택

### 방법 2: GitHub Actions 사용 (자동 배포)

1. **워크플로우 파일 확인**
   - `.github/workflows/deploy.yml` 파일이 이미 생성되어 있습니다
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다

2. **자동 배포 활성화**
   - GitHub 저장소 → Settings → Actions → General
   - "Workflow permissions"에서 "Read and write permissions" 선택
   - "Allow GitHub Actions to create and approve pull requests" 체크

3. **배포 확인**
   - `main` 브랜치에 푸시하면 자동으로 배포가 시작됩니다
   - Actions 탭에서 배포 상태를 확인할 수 있습니다

### 방법 3: 수동 배포

1. **빌드**
   ```bash
   npm run build
   ```

2. **build 폴더 내용을 gh-pages 브랜치에 푸시**
   ```bash
   git subtree push --prefix build origin gh-pages
   ```

   또는:
   ```bash
   npm install -g gh-pages
   gh-pages -d build
   ```

## 중요 사항

### package.json homepage 설정
`package.json`의 `homepage` 필드가 올바른지 확인하세요:
```json
"homepage": "https://mosw626.github.io/ys-an.github.io"
```

### 파일 경로
GitHub Pages에서 정적 파일 경로는 `process.env.PUBLIC_URL`을 사용해야 합니다.
이미 모든 컴포넌트에서 올바르게 설정되어 있습니다.

### CV 및 명함 파일
`public/assets/` 폴더에 다음 파일들을 추가하세요:
- `CV.pdf` (또는 원하는 형식)
- `BusinessCard.pdf` (또는 원하는 형식)

## 문제 해결

### 404 에러가 발생하는 경우
- `package.json`의 `homepage` 필드를 확인하세요
- 빌드 후 `build` 폴더의 `index.html`을 확인하세요
- 모든 경로가 상대 경로로 시작하는지 확인하세요

### 이미지나 파일이 로드되지 않는 경우
- `public` 폴더의 파일은 `/assets/filename.ext` 형식으로 참조됩니다
- `process.env.PUBLIC_URL`을 사용하여 경로를 지정하세요

### 스타일이 적용되지 않는 경우
- 빌드 후 `build` 폴더의 CSS 파일을 확인하세요
- 브라우저 캐시를 지우고 다시 시도하세요

