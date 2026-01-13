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

    // 저장소 내용 분석하여 간단한 요약 생성
    const reposWithDetails = await Promise.all(
      repos.slice(0, 10).map(async (repo) => {
        // 저장소 정보 기반으로 간단한 요약 생성
        let summary = repo.description;
        
        // description이 없거나 너무 짧으면 저장소 정보로 요약 생성
        if (!summary || summary.length < 10) {
          const parts = [];
          
          // 언어 정보 추가
          if (repo.language) {
            parts.push(`${repo.language}로 작성된`);
          }
          
          // topics 정보 활용
          if (repo.topics && repo.topics.length > 0) {
            const relevantTopics = repo.topics.filter(t => 
              !['config', 'github-config', 'template', 'starter'].includes(t.toLowerCase())
            );
            if (relevantTopics.length > 0) {
              parts.push(relevantTopics.slice(0, 2).join(', ') + ' 프로젝트');
            }
          }
          
          // 저장소 이름으로 프로젝트 타입 추론
          const nameLower = repo.name.toLowerCase();
          if (nameLower.includes('robot') || nameLower.includes('mecha')) {
            parts.push('로봇 관련');
          } else if (nameLower.includes('ws') || nameLower.includes('workspace')) {
            parts.push('워크스페이스');
          } else if (nameLower.includes('driver')) {
            parts.push('드라이버');
          } else if (nameLower.includes('study') || nameLower.includes('learn')) {
            parts.push('학습');
          } else if (nameLower.includes('project')) {
            parts.push('프로젝트');
          }
          
          // 저장소 이름이 .github.io면 포트폴리오
          if (nameLower.includes('.github.io')) {
            summary = '개인 포트폴리오 웹사이트';
          } else if (parts.length > 0) {
            summary = parts.join(' ') + '입니다.';
          } else {
            summary = `${repo.language || '다양한 언어'}로 개발된 프로젝트입니다.`;
          }
        }
        
        // 깨진 텍스트 감지 및 정리
        const isCorrupted = (text) => {
          if (!text || text.length < 5) return false;
          const corruptedPattern = /[ìíîïðñóôõöùúûüýþÿ]/;
          const corruptedChars = text.match(/[ìíîïðñóôõöùúûüýþÿ]/g);
          if (corruptedChars && corruptedChars.length > text.length * 0.2) {
            return true;
          }
          return corruptedPattern.test(text) && corruptedChars && corruptedChars.length > 3;
        };
        
        // 깨진 텍스트면 재생성
        if (isCorrupted(summary)) {
          const parts = [];
          if (repo.language) parts.push(`${repo.language} 프로젝트`);
          if (repo.topics && repo.topics.length > 0) {
            const relevantTopics = repo.topics.filter(t => 
              !['config', 'github-config'].includes(t.toLowerCase())
            );
            if (relevantTopics.length > 0) {
              parts.push(relevantTopics[0] + ' 관련');
            }
          }
          summary = parts.length > 0 ? parts.join(' ') + '입니다.' : `${repo.language || '프로젝트'}입니다.`;
        }
        
        // 최종 설명
        if (!summary || summary.length < 5) {
          summary = `${repo.language || '다양한 언어'}로 개발된 프로젝트입니다.`;
        }

        return {
          id: repo.id,
          title: repo.name,
          description: summary,
          github: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: repo.updated_at,
          topics: repo.topics || []
        };
      })
    );

    return reposWithDetails;
  } catch (error) {
    console.error('GitHub API 오류:', error);
    return [];
  }
};
