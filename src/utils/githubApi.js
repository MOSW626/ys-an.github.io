// GitHub API를 사용하여 프로젝트 정보 가져오기
export const fetchGitHubRepos = async (username = 'MOSW626') => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20&type=all`);

    if (!response.ok) {
      // Rate limit이나 다른 오류 처리
      if (response.status === 403) {
        console.warn('GitHub API rate limit에 도달했습니다. 잠시 후 다시 시도해주세요.');
        // 빈 배열 반환하되, 사용자에게는 GitHub 프로필 링크 제공
        return [];
      }
      console.error('GitHub API 응답 오류:', response.status, response.statusText);
      return [];
    }

    const repos = await response.json();

    // 빈 배열이면 빈 배열 반환 (에러 아님)
    if (!repos || repos.length === 0) {
      console.log('GitHub 저장소가 없거나 비공개입니다.');
      return [];
    }

    console.log(`GitHub 저장소 ${repos.length}개를 찾았습니다.`);

    // README 내용도 가져오기 (rate limit을 피하기 위해 선택적으로)
    const reposWithDetails = await Promise.all(
      repos.slice(0, 10).map(async (repo, index) => {
        // rate limit을 피하기 위해 일부만 README 가져오기
        let readme = null;
        if (index < 5) {
          try {
            const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
              headers: {
                'Accept': 'application/vnd.github.v3+json'
              }
            });
            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json();
              try {
                // Base64 디코딩 (한글 인코딩 문제 해결)
                const base64Content = readmeData.content.replace(/\s/g, '');
                const binaryString = atob(base64Content);
                // UTF-8 바이트를 문자열로 변환
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                  bytes[i] = binaryString.charCodeAt(i);
                }
                const decoded = new TextDecoder('utf-8').decode(bytes);

                // Markdown 제거 및 텍스트만 추출
                const textOnly = decoded
                  .replace(/#{1,6}\s+/g, '') // 헤더 제거
                  .replace(/\*\*([^*]+)\*\*/g, '$1') // 볼드 제거
                  .replace(/\*([^*]+)\*/g, '$1') // 이탤릭 제거
                  .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // 링크 제거
                  .replace(/```[\s\S]*?```/g, '') // 코드 블록 제거
                  .replace(/`([^`]+)`/g, '$1') // 인라인 코드 제거
                  .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '') // 이미지 제거
                  .replace(/\n{3,}/g, '\n\n') // 여러 줄바꿈 정리
                  .trim();
                readme = textOnly.substring(0, 200); // 처음 200자만
              } catch (decodeError) {
                console.warn(`README 디코딩 실패: ${repo.name}`, decodeError);
                readme = null;
              }
            }
          } catch (e) {
            // README가 없으면 무시
            console.log(`README를 가져올 수 없습니다: ${repo.name}`);
          }
        }

        // 설명 정리: description이 없거나 너무 짧으면 README 사용
        let finalDescription = repo.description;
        
        // 깨진 텍스트 감지 (이상한 문자 패턴)
        const isCorrupted = (text) => {
          if (!text || text.length < 5) return false;
          // 깨진 한글 패턴 감지 (예: ì, í, ë 같은 문자)
          const corruptedPattern = /[ìíîïðñóôõöùúûüýþÿ]/;
          // 깨진 텍스트 비율 확인 (이상한 문자가 너무 많으면 깨진 것으로 판단)
          const corruptedChars = text.match(/[ìíîïðñóôõöùúûüýþÿ]/g);
          if (corruptedChars && corruptedChars.length > text.length * 0.2) {
            return true;
          }
          return corruptedPattern.test(text) && corruptedChars && corruptedChars.length > 3;
        };
        
        // description이 없거나 깨져있으면 README 사용
        if (!finalDescription || finalDescription.length < 10) {
          if (readme && readme.length > 10 && !isCorrupted(readme)) {
            finalDescription = readme;
          }
        } else if (isCorrupted(finalDescription)) {
          // description이 깨져있으면 README 시도
          if (readme && readme.length > 10 && !isCorrupted(readme)) {
            finalDescription = readme;
          }
          // README도 깨져있으면 원본 description 유지 (최소한 뭔가 보여줌)
        }
        
        // 최종적으로 설명이 없으면 기본 메시지
        if (!finalDescription || finalDescription.length < 5) {
          finalDescription = repo.description || '설명이 없습니다.';
        }

        return {
          id: repo.id,
          title: repo.name,
          description: finalDescription,
          github: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: repo.updated_at,
          topics: repo.topics || [],
          readme: readme
        };
      })
    );

    return reposWithDetails;
  } catch (error) {
    console.error('GitHub API 오류:', error);
    return [];
  }
};
