import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaRobot, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '로봇 공학자',
        'Robotics Engineer',
        'ROS 개발자',
        'Robot Developer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  const handleDownload = (fileType) => {
    // CV 또는 명함 다운로드 함수
    const link = document.createElement('a');
    if (fileType === 'cv') {
      // public/assets 폴더에 CV.pdf 파일을 추가해주세요
      // 또는 다른 형식: CV.docx, CV.png 등
      link.href = process.env.PUBLIC_URL + '/assets/CV.pdf';
      link.download = 'YS_AN_CV.pdf';
    } else if (fileType === 'business-card') {
      // public/assets 폴더에 BusinessCard.pdf 파일을 추가해주세요
      // 또는 다른 형식: BusinessCard.png, BusinessCard.jpg 등
      link.href = process.env.PUBLIC_URL + '/assets/BusinessCard.pdf';
      link.download = 'YS_AN_BusinessCard.pdf';
    }

    // 파일이 없을 경우를 대비한 에러 처리
    link.onerror = () => {
      alert('파일을 찾을 수 없습니다. public/assets 폴더에 파일을 추가해주세요.');
    };

    link.click();
  };

  return (
    <section id="home" className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="home-content">
            <div className="home-text fade-in-up">
              <h1 className="home-title">
                안녕하세요, <span className="highlight">YS AN</span>입니다
              </h1>
              <h2 className="home-subtitle">
                <span ref={typedRef}></span>
              </h2>
              <p className="home-description">
                ROS를 활용한 로봇 개발과 연구를 진행하는 로봇 공학자입니다.
              </p>
              <div className="home-buttons">
                <Button
                  className="btn-custom btn-primary-custom me-3 mb-3"
                  onClick={() => handleDownload('cv')}
                >
                  <HiOutlineDocumentText className="me-2" />
                  CV 다운로드
                </Button>
                <Button
                  className="btn-custom btn-secondary-custom mb-3"
                  onClick={() => handleDownload('business-card')}
                >
                  <FaDownload className="me-2" />
                  명함 다운로드
                </Button>
              </div>
              <div className="home-social">
                <a
                  href="https://github.com/MOSW626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:ays6533@naver.com"
                  className="social-icon"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://mosw.notion.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaRobot />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} className="home-image">
            <div className="robot-animation">
              <FaRobot className="robot-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

