# 프로젝트 파일 추가 가이드

## 파일 추가 방법

### 1. 파일 준비
프로젝트 관련 파일들을 준비하세요:
- 보고서: PDF, DOCX 등
- 발표 자료: PPTX, PDF 등
- 코드: ZIP 파일 등
- 기타 문서

### 2. 파일 저장 위치
`public/assets/files/` 폴더에 파일을 저장하세요:

```
public/
  assets/
    files/
      isp_report.pdf
      project2_presentation.pdf
      project3_code.zip
      ...
```

### 3. 프로젝트 데이터에 파일 추가
`src/data/notionProjects.js` 파일을 열어서 각 프로젝트의 `files` 배열에 파일 정보를 추가하세요:

```javascript
{
  title: '프로젝트 이름',
  // ... 다른 정보들 ...
  files: [
    {
      name: '프로젝트 보고서.pdf',
      url: '/assets/files/isp_report.pdf'
    },
    {
      name: '발표 자료.pdf',
      url: '/assets/files/presentation.pdf'
    }
  ]
}
```

### 4. 파일 형식별 아이콘
현재는 PDF 아이콘만 표시되지만, 필요에 따라 다른 아이콘도 추가할 수 있습니다.

## YouTube 링크 추가 방법

### 1. YouTube URL 형식
YouTube 링크는 다음 형식 중 하나를 사용할 수 있습니다:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

### 2. 프로젝트 데이터에 추가
`src/data/notionProjects.js` 파일에서 각 영상 제작 프로젝트의 `youtube` 필드를 수정하세요:

```javascript
{
  title: '2024 충북과학고 졸업영상',
  // ... 다른 정보들 ...
  youtube: 'https://www.youtube.com/watch?v=실제_비디오_ID',
  // 또는
  youtube: 'https://youtu.be/실제_비디오_ID'
}
```

### 3. 비디오 ID 찾기
YouTube URL에서 `v=` 뒤의 값이 비디오 ID입니다.
예: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → 비디오 ID는 `dQw4w9WgXcQ`

