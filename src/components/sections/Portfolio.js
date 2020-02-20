import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import portfolio from "../../json/portfolio.json";


function Portfolio() {
  return (
    <section className="section-portfolio full-width">
      <Row>
        <div className="col-12 d-flex justify-content-center align-items-center" id="section-portfolio">
          <h1 className="heading-section">Portfolio</h1>
        </div>
      </Row>
      <Row>
        {portfolio.map(project => (
          <Col lg xs={6} key={project.id}>
            <Link to={{
                pathname: `popup/${project.id}`,
                state: { modal: true }
            }}>
              <div className="tarot-card">
                <div className="tarot-border">
                  <div className="tarot-img--container">
                    <img
                      src={require(`../../assets/images/portfolio/tarot/${project.tag}.png`)}
                      alt="project icon"
                      className="img-fluid"
                    />
                  </div>
                  <div className="tarot-text">{project.name}</div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Portfolio;
