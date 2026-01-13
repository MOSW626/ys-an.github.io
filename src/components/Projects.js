import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Accordion, Badge, Spinner } from 'react-bootstrap';
import { FaGithub, FaRobot, FaVideo, FaChevronDown } from 'react-icons/fa';
import { fetchGitHubRepos } from '../utils/githubApi';
import { notionProjects } from '../data/notionProjects';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadGitHubRepos = async () => {
      setLoading(true);
      const repos = await fetchGitHubRepos('MOSW626');
      setGithubRepos(repos);
      setLoading(false);
    };
    loadGitHubRepos();
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleProjectClick = (project, type) => {
    setSelectedProject(project);
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setModalType(null);
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              로봇 공학 프로젝트 및 연구
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={12}>
            <Accordion defaultActiveKey="0" flush>
              {/* 로봇 개발 프로젝트 */}
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>
                  <div className="d-flex align-items-center w-100">
                    <FaRobot className="me-2" />
                    <strong>로봇 개발 프로젝트</strong>
                    <Badge bg="primary" className="ms-auto me-2">
                      {notionProjects.robotDevelopment.length}
                    </Badge>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {notionProjects.robotDevelopment.map((project, index) => (
                      <Col lg={6} md={6} key={index} className="mb-4">
                        <Card className="project-card-detailed" onClick={() => handleProjectClick(project, 'robot')} style={{ cursor: 'pointer' }}>
                          {project.images && project.images.length > 0 && (
                            <Card.Img
                              variant="top"
                              src={project.images[0]}
                              alt={project.title}
                              className="project-thumbnail"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          )}
                          <Card.Body>
                            <Card.Title className="h5 mb-3">{project.title}</Card.Title>
                            <Card.Text className="mb-3">
                              {project.description}
                            </Card.Text>
                            <div className="mb-3">
                              <div className="tech-tags">
                                {(project.technologies || []).slice(0, 3).map((tech, idx) => (
                                  <Badge key={idx} bg="primary" className="me-1 mb-1">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="mb-2">
                                  {project.tags.map((tag, idx) => (
                                    <Badge key={idx} bg="secondary" className="me-1">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="text-muted small">{project.period}</div>
                              </div>
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleProjectClick(project, 'robot');
                                }}
                              >
                                상세 보기
                              </button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              {/* 영상 제작 프로젝트 */}
              <Accordion.Item eventKey="1" className="mb-3">
                <Accordion.Header>
                  <div className="d-flex align-items-center w-100">
                    <FaVideo className="me-2" />
                    <strong>영상 제작 프로젝트</strong>
                    <Badge bg="primary" className="ms-auto me-2">
                      {notionProjects.videoProduction.length}
                    </Badge>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {notionProjects.videoProduction.map((project, index) => (
                      <Col lg={6} md={6} key={index} className="mb-4">
                        <Card className="project-card-detailed" onClick={() => handleProjectClick(project, 'video')} style={{ cursor: 'pointer' }}>
                          {project.images && project.images.length > 0 && (
                            <Card.Img
                              variant="top"
                              src={project.images[0]}
                              alt={project.title}
                              className="project-thumbnail"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          )}
                          <Card.Body>
                            <Card.Title className="h5 mb-3">{project.title}</Card.Title>
                            <Card.Text className="mb-3">
                              {project.description}
                            </Card.Text>
                            <div className="mb-3">
                              <div className="tech-tags">
                                {(project.technologies || []).slice(0, 3).map((tech, idx) => (
                                  <Badge key={idx} bg="info" className="me-1 mb-1">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="mb-2">
                                  {project.tags.map((tag, idx) => (
                                    <Badge key={idx} bg="info" className="me-1">
                                      {tag}
                                    </Badge>
                                  ))}
                                  {project.duration && (
                                    <Badge bg="dark" className="me-1">
                                      {project.duration}
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-muted small">{project.period}</div>
                              </div>
                              <div className="d-flex gap-2">
                                {project.youtube && (
                                  <a
                                    href={project.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    YouTube
                                  </a>
                                )}
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleProjectClick(project, 'video');
                                  }}
                                >
                                  상세 보기
                                </button>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              {/* GitHub 프로젝트 */}
              <Accordion.Item eventKey="2" className="mb-3">
                <Accordion.Header>
                  <div className="d-flex align-items-center w-100">
                    <FaGithub className="me-2" />
                    <strong>GitHub 프로젝트</strong>
                    {loading ? (
                      <Spinner size="sm" className="ms-auto me-2" />
                    ) : (
                      <Badge bg="dark" className="ms-auto me-2">
                        {githubRepos.length}
                      </Badge>
                    )}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {loading ? (
                    <div className="text-center py-4">
                      <Spinner animation="border" />
                      <p className="mt-2 text-muted">GitHub 프로젝트를 불러오는 중...</p>
                    </div>
                  ) : githubRepos.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="text-muted mb-2">GitHub API에서 저장소를 불러올 수 없습니다.</p>
                      <p className="text-muted small mb-3">Rate limit 또는 네트워크 문제일 수 있습니다.</p>
                      <a
                        href="https://github.com/MOSW626?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FaGithub className="me-2" />
                        GitHub 저장소 직접 보기
                      </a>
                      <p className="text-muted small mt-3">
                        또는 잠시 후 페이지를 새로고침해주세요.
                      </p>
                    </div>
                  ) : (
                    <Row>
                      {githubRepos.map((repo) => {
                        const githubProject = {
                          ...repo,
                          period: `업데이트: ${new Date(repo.updated).toLocaleDateString('ko-KR')}`,
                          role: '개발자',
                          technologies: repo.language ? [repo.language] : [],
                          achievements: [
                            `⭐ ${repo.stars} stars`,
                            `🍴 ${repo.forks} forks`,
                            repo.topics.length > 0 ? `${repo.topics.length} topics` : null
                          ].filter(Boolean)
                        };
                        return (
                          <Col lg={6} md={6} key={repo.id} className="mb-4">
                            <Card className="project-card-detailed" onClick={() => handleProjectClick(githubProject, 'github')} style={{ cursor: 'pointer' }}>
                              <Card.Body>
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                  <Card.Title className="h5 mb-0">{repo.title}</Card.Title>
                                  <FaGithub size={20} className="text-muted" />
                                </div>
                                <Card.Text 
                                  className="mb-3" 
                                  style={{ 
                                    overflow: 'hidden', 
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    minHeight: '60px',
                                    wordBreak: 'break-word'
                                  }}
                                >
                                  {repo.description && repo.description.length > 0 && !repo.description.includes('')
                                    ? repo.description 
                                    : repo.description && repo.description.length > 0 && repo.description.includes('')
                                    ? '설명을 불러올 수 없습니다. GitHub에서 직접 확인해주세요.'
                                    : '설명이 없습니다.'}
                                </Card.Text>
                                <div className="mb-3">
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    {repo.language && (
                                      <Badge bg="success">{repo.language}</Badge>
                                    )}
                                    <span className="text-muted small">
                                      ⭐ {repo.stars} | 🍴 {repo.forks}
                                    </span>
                                  </div>
                                </div>
                                {repo.topics.length > 0 && (
                                  <div className="mb-3">
                                    <div className="tech-tags">
                                      {repo.topics.slice(0, 3).map((topic, idx) => (
                                        <Badge key={idx} bg="secondary" className="me-1 mb-1">
                                          {topic}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                <button
                                  className="btn btn-sm btn-outline-dark w-100"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleProjectClick(githubProject, 'github');
                                  }}
                                >
                                  <FaGithub className="me-2" />
                                  상세 보기
                                </button>
                              </Card.Body>
                            </Card>
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={12}>
            <div className="projects-note">
              <p className="mb-0">
                <FaRobot className="me-2" />
                더 많은 프로젝트와 상세한 내용은{' '}
                <a
                  href="https://mosw.notion.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  노션 포트폴리오
                </a>
                {' '}또는{' '}
                <a
                  href="https://mosw.tistory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  Tistory 블로그
                </a>
                에서 확인하실 수 있습니다.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <ProjectModal
        show={showModal}
        onHide={handleCloseModal}
        project={selectedProject}
        type={modalType}
      />
    </section>
  );
};

export default Projects;

