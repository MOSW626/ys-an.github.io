import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUniversity, FaBuilding, FaLink } from 'react-icons/fa';
import './Organizations.css';

const Organizations = () => {
  // 경력 및 소속 기관 데이터
  const organizations = [
    {
      name: '충북과학고등학교',
      role: '학생',
      period: '2021 - 2024',
      description: '과학고등학교에서 로봇 공학을 전공하며 다양한 프로젝트를 진행했습니다. YSC 발표대회, 전국과학전람회 등에 참가하여 우수한 성과를 거두었습니다.',
      image: null, // '/assets/organizations/cbsh.png' 형식으로 추가 가능
      link: 'https://www.cbsh.kr',
      type: 'university',
      achievements: [
        'YSC 발표대회 참가 선정',
        '전국과학전람회 대통령상 수상',
        '영상 제작 및 행사 기획 참여'
      ]
    }
    // 추가 경력이 있으면 여기에 추가
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'university':
        return <FaUniversity />;
      case 'company':
        return <FaBuilding />;
      default:
        return <FaBuilding />;
    }
  };

  return (
    <section id="organizations" className="organizations-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Career & Organizations</h2>
            <p className="section-subtitle">
              경력 및 소속 기관
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          {organizations.map((org, index) => (
            <Col lg={6} md={6} key={index} className="mb-4">
              <Card className="card-custom organization-card">
                {org.image ? (
                  <Card.Img
                    variant="top"
                    src={org.image}
                    className="organization-image"
                  />
                ) : (
                  <div className="organization-icon-wrapper">
                    <div className="organization-icon">
                      {getIcon(org.type)}
                    </div>
                  </div>
                )}
                <Card.Body>
                  <Card.Title>
                    <a
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="organization-link"
                    >
                      {org.name}
                      <FaLink className="ms-2 link-icon" />
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {org.role} | {org.period}
                  </Card.Subtitle>
                  <Card.Text className="mb-3">{org.description}</Card.Text>
                  {org.achievements && org.achievements.length > 0 && (
                    <div>
                      <strong className="d-block mb-2">주요 성과:</strong>
                      <ul className="organization-achievements">
                        {org.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col lg={12}>
            <div className="organizations-note">
              <p>
                <strong>참고:</strong> 위의 기관 정보는 예시입니다. 실제 소속 기관 정보로 업데이트해주세요.
                이미지가 있는 경우 이미지 URL을 추가하거나, public 폴더에 이미지를 저장하고 경로를 지정할 수 있습니다.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Organizations;

