import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRobot, FaCode, FaCog, FaGraduationCap, FaTools } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    {
      icon: <FaRobot />,
      title: '로봇 공학',
      items: ['ROS (Robot Operating System)', '로봇 제어 및 동역학', '센서 융합', 'SLAM (Simultaneous Localization and Mapping)', '자율주행 시스템']
    },
    {
      icon: <FaCode />,
      title: '프로그래밍',
      items: ['Python', 'C++', 'JavaScript', 'ROS 개발', 'Linux 시스템 프로그래밍']
    },
    {
      icon: <FaTools />,
      title: '도구 및 프레임워크',
      items: ['ROS1/ROS2', 'Gazebo 시뮬레이션', 'OpenCV', 'TensorFlow/PyTorch', 'Git/GitHub']
    },
    {
      icon: <FaGraduationCap />,
      title: '연구 분야',
      items: ['로봇 비전', '모션 계획', '강화학습', '로봇 시스템 통합']
    }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              로봇 공학자로서의 경험과 기술
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={12} className="mb-4">
            <div className="about-content">
              <h3>로봇 공학 개발자</h3>
              <p>
                ROS(Robot Operating System)를 활용한 로봇 개발과 연구에 집중하고 있습니다.
                로봇 제어, 센서 융합, SLAM, 자율주행 등 다양한 분야에서 프로젝트를 진행해왔으며,
                실무 경험과 연구를 통해 지속적으로 성장하고 있습니다.
              </p>
              <p>
                특히 로봇 시스템의 전체적인 아키텍처 설계부터 구현, 테스트까지의 과정에 관심이 많으며,
                실용적이고 효율적인 솔루션을 만드는 것을 목표로 합니다.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {skills.map((skill, index) => (
            <Col lg={6} md={6} key={index} className="mb-3">
              <Card className="card-custom skill-card">
                <Card.Body>
                  <div className="skill-icon">{skill.icon}</div>
                  <Card.Title className="mt-3 mb-3">{skill.title}</Card.Title>
                  <ul className="skill-list">
                    {skill.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;

