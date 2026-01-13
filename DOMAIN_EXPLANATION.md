# GitHub Pages 도메인 설명

## 🔴 현재 상황

- `ysan.github.io`로 접속 불가 (404 에러)
- `mosw626.github.io/ysan.github.io/`로만 접속 가능

## 📝 GitHub Pages 도메인 규칙

### 사용자 페이지 (User Pages)
- **저장소 이름**: `username.github.io` (정확히 일치해야 함)
- **접속 URL**: `username.github.io`
- **조건**: GitHub 사용자 이름과 저장소 이름이 일치해야 함

### 프로젝트 페이지 (Project Pages)
- **저장소 이름**: 아무 이름 (예: `my-project`)
- **접속 URL**: `username.github.io/my-project`
- **조건**: 저장소 이름이 `username.github.io`가 아님

## ✅ 해결 방법

### 옵션 1: mosw626.github.io로 접속 (권장)

**저장소 이름을 `mosw626.github.io`로 변경:**

1. GitHub 저장소 → Settings → General
2. Repository name을 `mosw626.github.io`로 변경
3. 그러면 `mosw626.github.io`로 직접 접속 가능

**장점:**
- 간단하고 빠름
- GitHub 사용자 이름과 일치
- 루트 도메인으로 접속 가능

### 옵션 2: 커스텀 도메인 설정

`ysan.github.io`를 커스텀 도메인으로 사용하려면:

1. 도메인 구매 필요 (`ysan.github.io` 도메인)
2. DNS 설정 필요
3. GitHub Pages에 커스텀 도메인 등록

**단점:**
- 도메인 구매 비용 발생
- DNS 설정 복잡

## 🔧 현재 설정 변경

### package.json 수정
```json
"homepage": "https://mosw626.github.io"
```

이렇게 변경하면:
- 저장소 이름이 `mosw626.github.io`일 때 루트 도메인으로 접속
- 저장소 이름이 다른 경우 자동으로 경로 추가

## 📋 체크리스트

- [ ] GitHub에서 저장소 이름 확인
- [ ] 저장소 이름을 `mosw626.github.io`로 변경 (원하는 경우)
- [ ] package.json의 homepage 업데이트
- [ ] 배포 완료 대기
- [ ] `mosw626.github.io`로 접속 테스트

## ⚠️ 중요 사항

**`ysan.github.io`로 직접 접속하려면:**
- GitHub 사용자 이름이 `ysan`이어야 함
- 또는 커스텀 도메인 설정 필요

**현재 사용자 이름이 `MOSW626`이므로:**
- `mosw626.github.io`로 접속하는 것이 가장 간단합니다
- 저장소 이름을 `mosw626.github.io`로 변경하면 루트 도메인으로 접속 가능

