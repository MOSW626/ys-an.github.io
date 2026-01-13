# 저장소 이름 변경 가이드: ys-an.github.io → ysan.github.io

## ✅ 변경 완료된 항목

다음 파일들이 업데이트되었습니다:
- `package.json` - homepage URL 변경
- 모든 문서 파일의 URL 참조 업데이트

## 🔧 GitHub에서 저장소 이름 변경 (필수!)

**이 작업은 GitHub 웹사이트에서 직접 해야 합니다:**

### 단계별 가이드

1. **GitHub 저장소로 이동**
   - https://github.com/MOSW626/ys-an.github.io

2. **Settings 탭 클릭**
   - 저장소 페이지 상단의 **Settings** 탭 클릭

3. **General 섹션으로 이동**
   - 왼쪽 사이드바에서 **General** 클릭 (맨 위에 있음)

4. **Repository name 변경**
   - 페이지 상단의 **Repository name** 섹션 찾기
   - 현재 이름: `ys-an.github.io`
   - 새 이름 입력: `ysan.github.io`
   - **Rename** 버튼 클릭

5. **확인 메시지**
   - GitHub에서 확인 메시지가 표시됩니다
   - **I understand, rename my repository** 클릭

## 🔄 로컬 저장소 업데이트

GitHub에서 저장소 이름을 변경한 후, 로컬 저장소의 remote URL을 업데이트해야 합니다:

```bash
# 원격 URL 확인
git remote -v

# 원격 URL 업데이트
git remote set-url origin https://github.com/MOSW626/ysan.github.io.git

# 확인
git remote -v
```

## 📝 변경 후 확인 사항

### 1. GitHub Pages 설정 확인

1. **Settings** → **Pages** 이동
2. **Source** 확인:
   - **GitHub Actions** 선택 (권장)
   - 또는 **Deploy from a branch** → `gh-pages`

### 2. 새 URL로 접속

변경 완료 후 약 1-2분 후:
- **새 URL**: https://mosw626.github.io/ysan.github.io
- **이전 URL**: https://mosw626.github.io/ys-an.github.io (리다이렉트될 수 있음)

### 3. Actions 재실행

1. **Actions** 탭으로 이동
2. 최신 워크플로우 확인
3. 필요시 **Re-run all jobs** 클릭

## ⚠️ 중요 사항

1. **기존 링크**: 이전 URL로 접속하는 링크들이 있을 수 있습니다
   - GitHub가 자동으로 리다이렉트할 수도 있지만, 보장되지 않습니다
   - 중요한 곳에 새 URL을 업데이트하세요

2. **로컬 폴더 이름**: 로컬 폴더 이름은 변경하지 않아도 됩니다
   - Git은 remote URL만 사용합니다
   - 원한다면 폴더 이름도 변경 가능하지만 필수는 아닙니다

3. **배포 확인**: 저장소 이름 변경 후 첫 배포가 성공하는지 확인하세요

## 🔍 문제 해결

### 저장소 이름을 찾을 수 없다는 오류

```bash
# 원격 URL 다시 설정
git remote set-url origin https://github.com/MOSW626/ysan.github.io.git

# 푸시 테스트
git push origin main
```

### GitHub Pages가 작동하지 않는 경우

1. Settings → Pages에서 설정 확인
2. Actions 탭에서 배포 상태 확인
3. 새 URL로 접속 시도

## ✨ 완료 체크리스트

- [ ] GitHub에서 저장소 이름 변경 (`ysan.github.io`)
- [ ] 로컬 remote URL 업데이트
- [ ] GitHub Pages 설정 확인
- [ ] 새 URL로 접속 테스트
- [ ] Actions 배포 성공 확인

## 📚 참고

- GitHub 저장소 이름 변경: https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository
- GitHub Pages 설정: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

