import React from 'react';
import { Modal, Carousel, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaFilePdf, FaTimes, FaYoutube } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ show, onHide, project, type }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="project-modal">
      <Modal.Header className="project-modal-header">
        <Modal.Title className="d-flex align-items-center">
          {type === 'robot' && <span className="me-2">🤖</span>}
          {type === 'video' && <span className="me-2">🎬</span>}
          {type === 'github' && <FaGithub className="me-2" />}
          {project.title}
        </Modal.Title>
        <Button variant="link" onClick={onHide} className="close-btn">
          <FaTimes />
        </Button>
      </Modal.Header>
      <Modal.Body className="project-modal-body">
        {project.images && project.images.length > 0 && (
          <div className="mb-4">
            <Carousel
              interval={null}
              controls={project.images.length > 1}
              indicators={project.images.length > 1}
              fade
            >
              {project.images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100 project-image"
                    src={image}
                    alt={`${project.title} ${idx + 1}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}

        <div className="project-info mb-4">
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>기간:</strong> {project.period}
            </div>
            {project.role && (
              <div className="col-md-6">
                <strong>역할:</strong> {project.role}
              </div>
            )}
            {project.contribution && (
              <div className="col-md-6 mt-2">
                <strong>기여도:</strong> {project.contribution}
              </div>
            )}
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="mb-3">
              <strong>태그:</strong>
              <div className="mt-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} bg="secondary" className="me-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-3">
              <strong>기술 스택:</strong>
              <div className="mt-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} bg="primary" className="me-1 mb-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="project-description mb-4">
          <h5>설명</h5>
          <p>{project.fullDescription || project.description}</p>
        </div>

        {project.achievements && project.achievements.length > 0 && (
          <div className="project-achievements mb-4">
            <h5>주요 성과</h5>
            <ul>
              {project.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {project.files && project.files.length > 0 && (
          <div className="project-files mb-4">
            <h5>관련 파일</h5>
            <div className="file-list">
              {project.files.map((file, idx) => (
                <a
                  key={idx}
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="file-link"
                >
                  <FaFilePdf className="me-2" />
                  {file.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="project-links">
          {project.youtube && (
            <Button
              variant="outline-danger"
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="me-2"
              as="a"
            >
              <FaYoutube className="me-2" />
              YouTube
            </Button>
          )}
          {project.github && (
            <Button
              variant="outline-dark"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="me-2"
              as="a"
            >
              <FaGithub className="me-2" />
              GitHub
            </Button>
          )}
          {project.link && (
            <Button
              variant="outline-primary"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              as="a"
            >
              상세 보기
            </Button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;

