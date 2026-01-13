# 배포 실패 문제 확인 가이드

## 🔴 현재 상황
GitHub Pages 배포가 여러 번 실패하고 있습니다.

## 🔍 확인 방법

### 1. GitHub Actions 로그 확인
1. GitHub 저장소 → **Actions** 탭
2. 실패한 워크플로우 클릭
3. **build-and-deploy** 단계 클릭
4. 에러 메시지 확인

### 2. GitHub Pages 배포 로그 확인
1. GitHub 저장소 → **Settings** → **Pages**
2. **Recent deployments** 섹션 확인
3. 실패한 배포 클릭하여 에러 확인

## 🔧 가능한 원인

### 1. 빌드 에러
- JavaScript/React 코드 에러
- 의존성 문제
- 환경 변수 문제

### 2. 배포 권한 문제
- GitHub Actions 권한 부족
- gh-pages 브랜치 푸시 권한 없음

### 3. 파일 크기 문제
- 빌드 결과물이 너무 큼
- GitHub Pages 제한 초과

### 4. 워크플로우 설정 문제
- 잘못된 경로 설정
- 잘못된 브랜치 설정

## ✅ 해결 방법

### 1단계: 로컬 빌드 테스트
```bash
npm run build
```
로컬에서 빌드가 성공하는지 확인

### 2단계: 에러 로그 확인
GitHub Actions에서 정확한 에러 메시지 확인

### 3단계: 워크플로우 확인
`.github/workflows/deploy.yml` 파일이 올바른지 확인

## 📝 다음 단계
에러 로그를 확인한 후 구체적인 해결 방법을 제시하겠습니다.

