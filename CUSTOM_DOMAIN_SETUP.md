# ysan.github.io로 직접 접속하기

## 🔴 현재 문제
- `ysan.github.io`로 접속하면 404 에러
- `mosw626.github.io/ysan.github.io/`로만 접속 가능

## ✅ 해결 방법

### 방법 1: 저장소 이름을 정확히 `ysan.github.io`로 변경 (권장)

GitHub Pages에서 `username.github.io` 형식의 도메인으로 접속하려면, 저장소 이름이 정확히 그 이름이어야 합니다.

**현재**: `ysan.github.io` (이미 변경했다면)
**확인 필요**: GitHub에서 실제 저장소 이름 확인

#### 단계:
1. GitHub 저장소로 이동: https://github.com/MOSW626
2. 저장소 목록에서 `ysan.github.io` 저장소 찾기
3. 저장소 이름이 정확히 `ysan.github.io`인지 확인
4. 아니라면 Settings → General → Repository name 변경

### 방법 2: 사용자 페이지로 설정

만약 `ysan.github.io`가 다른 용도로 사용 중이라면:
- 저장소 이름을 `ysan.github.io`로 변경
- GitHub Pages 설정에서 루트 도메인으로 설정

## 🔧 확인 사항

### 1. 저장소 이름 확인
```bash
git remote -v
# origin이 https://github.com/MOSW626/ysan.github.io.git 인지 확인
```

### 2. GitHub Pages 설정 확인
1. Settings → Pages
2. Source: **GitHub Actions** 선택
3. Custom domain: 비어있어야 함 (사용자 페이지는 커스텀 도메인 불필요)

### 3. package.json 확인
```json
"homepage": "https://mosw626.github.io/ysan.github.io"
```
이것은 올바릅니다. 저장소 이름이 `ysan.github.io`이면 자동으로 루트 도메인으로 접속됩니다.

## 📝 중요 사항

### GitHub Pages 도메인 규칙:
- **사용자 페이지**: `username.github.io` 저장소 → `username.github.io`로 접속
- **프로젝트 페이지**: 다른 저장소 → `username.github.io/repository-name`로 접속

### 현재 상황:
- 저장소 이름이 `ysan.github.io`가 아니면 프로젝트 페이지로 동작
- `mosw626.github.io/ysan.github.io/`로 접속되는 것은 정상

## 🚀 해결 단계

1. **GitHub에서 저장소 이름 확인**
   - https://github.com/MOSW626/ysan.github.io
   - 저장소 이름이 정확히 `ysan.github.io`인지 확인

2. **저장소 이름 변경 (필요시)**
   - Settings → General → Repository name
   - `ysan.github.io`로 변경

3. **로컬 remote URL 업데이트**
   ```bash
   git remote set-url origin https://github.com/MOSW626/ysan.github.io.git
   ```

4. **package.json 확인**
   - homepage가 올바른지 확인 (현재 올바름)

5. **배포 대기**
   - deploy가 완료될 때까지 대기
   - 보통 1-2분 소요

## ⚠️ 주의사항

- `ysan.github.io` 도메인은 GitHub 사용자 페이지 전용입니다
- 저장소 이름이 정확히 일치해야 합니다
- 대소문자도 중요합니다

## 🔍 문제 진단

현재 `mosw626.github.io/ysan.github.io/`로 접속되는 것은:
- 저장소 이름이 `ysan.github.io`가 아니거나
- GitHub Pages 설정이 프로젝트 페이지로 되어 있거나
- 배포가 아직 완료되지 않았을 수 있습니다

