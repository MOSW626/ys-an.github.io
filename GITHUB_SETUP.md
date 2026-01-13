# GitHub Setup 완료 가이드

## ✅ 현재 상태

- ✅ Git 저장소 초기화 완료
- ✅ GitHub 원격 저장소 연결 완료: `https://github.com/MOSW626/ys-an.github.io`
- ✅ GitHub Actions 워크플로우 설정 완료 (`.github/workflows/deploy.yml`)
- ✅ 배포 스크립트 설정 완료 (`package.json`)

## 🚀 GitHub Pages 배포 설정

### 1. GitHub 저장소에서 Pages 설정

1. GitHub 저장소로 이동: https://github.com/MOSW626/ys-an.github.io
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 선택
4. **Source** 섹션에서:
   - **Branch**: `gh-pages` 선택
   - **Folder**: `/ (root)` 선택
5. **Save** 클릭

### 2. GitHub Actions 권한 설정

1. 저장소의 **Settings** → **Actions** → **General** 이동
2. **Workflow permissions** 섹션에서:
   - ✅ **Read and write permissions** 선택
   - ✅ **Allow GitHub Actions to create and approve pull requests** 체크
3. **Save** 클릭

### 3. 배포 방법

#### 방법 1: 자동 배포 (권장)
- `main` 브랜치에 푸시하면 자동으로 배포됩니다
- GitHub Actions가 자동으로 빌드하고 `gh-pages` 브랜치에 배포합니다

```bash
# 변경사항 커밋 및 푸시
git add .
git commit -m "Update portfolio"
git push origin main
```

#### 방법 2: 수동 배포
```bash
npm run deploy
```

## 📝 다음 단계

### 1. 변경사항 커밋 및 푸시

현재 변경사항이 있다면:

```bash
# 변경사항 확인
git status

# 모든 변경사항 추가
git add .

# 커밋
git commit -m "Update portfolio with latest changes"

# GitHub에 푸시
git push origin main
```

### 2. 배포 확인

1. GitHub 저장소의 **Actions** 탭에서 배포 상태 확인
2. 배포 완료 후 약 1-2분 후 웹사이트 접속:
   - `https://mosw626.github.io/ys-an.github.io`

### 3. 커스텀 도메인 설정 (선택사항)

만약 `ys-an.github.io` 도메인을 사용하고 싶다면:

1. GitHub 저장소 이름을 `ys-an.github.io`로 변경하거나
2. 새 저장소를 `ys-an.github.io`로 생성하고 코드를 푸시
3. 그 경우 `package.json`의 `homepage`를 `https://mosw626.github.io`로 변경

## 🔧 문제 해결

### 배포가 실패하는 경우

1. **Actions 탭 확인**: 에러 메시지 확인
2. **워크플로우 권한 확인**: Settings → Actions → General
3. **빌드 로컬 테스트**:
   ```bash
   npm run build
   ```

### 404 에러가 발생하는 경우

1. `package.json`의 `homepage` 필드 확인
2. GitHub Pages 설정에서 올바른 브랜치(`gh-pages`) 선택 확인
3. 배포 후 몇 분 기다린 후 다시 시도

### 이미지나 파일이 로드되지 않는 경우

- `public` 폴더의 파일은 `/assets/filename.ext` 형식으로 참조
- `process.env.PUBLIC_URL` 사용 확인

## 📚 유용한 명령어

```bash
# 현재 상태 확인
git status

# 원격 저장소 확인
git remote -v

# 브랜치 확인
git branch -a

# 배포 상태 확인 (GitHub Actions)
# 브라우저에서: https://github.com/MOSW626/ys-an.github.io/actions
```

## ✨ 완료!

모든 설정이 완료되었습니다. 이제 `main` 브랜치에 푸시하면 자동으로 배포됩니다!

