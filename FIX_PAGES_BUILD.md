# GitHub Pages 빌드 실패 해결 방법

## 🔴 문제
GitHub Pages의 자동 빌드가 실패하고 있습니다.

## ✅ 해결 방법

### 1. GitHub Pages 설정 변경 (필수!)

GitHub Pages의 자동 빌드를 비활성화하고 GitHub Actions만 사용하도록 설정:

1. **Settings** → **Pages** 이동
2. **Source** 섹션:
   - **Deploy from a branch** 선택
   - **Branch**: `gh-pages` 선택
   - **Folder**: `/ (root)` 선택
3. **Save** 클릭

**중요**: GitHub Actions가 `gh-pages` 브랜치에 직접 푸시하므로, GitHub Pages의 자동 빌드는 필요 없습니다.

### 2. 워크플로우 확인

현재 워크플로우는:
- `peaceiris/actions-gh-pages` 사용
- `gh-pages` 브랜치에 직접 배포
- 자동 빌드 불필요

### 3. 배포 확인

1. **Actions** 탭에서 워크플로우 실행 확인
2. **build-and-deploy** 단계가 성공하는지 확인
3. `gh-pages` 브랜치가 업데이트되었는지 확인

## 🔍 문제 원인

GitHub Pages가 두 가지 방식으로 배포를 시도하고 있을 수 있습니다:
1. GitHub Actions (워크플로우) - ✅ 정상 작동
2. GitHub Pages 자동 빌드 - ❌ 실패 (Jekyll 빌드 시도)

React 앱은 Jekyll이 필요 없으므로 자동 빌드를 비활성화해야 합니다.

## 📝 참고

- `enable_jekyll: false` 설정 추가 완료
- GitHub Pages 설정에서 자동 빌드 비활성화 필요

