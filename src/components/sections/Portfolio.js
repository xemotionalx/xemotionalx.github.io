import React from "react";
import { Col, Row } from "react-bootstrap";
import portfolio from "../../json/portfolio.json";


function Portfolio() {
  return (
    <section className="section-portfolio full-width">
      <Row>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h1 className="heading-section">Portfolio</h1>
        </div>
      </Row>
      <Row>
        {portfolio.map(project => (
          <Col lg xs={6}>
            <a href="#!">
              <div className="tarot-card" key={project.id}>
                <div className="tarot-border">
                  <div className="tarot-img--container">
                    <img
                      src={require(`../../assets/images/portfolio/tarot/${project.tarot_img}.png`)}
                      alt="project icon"
                      className="img-fluid"
                    />
                  </div>
                  <div className="tarot-text">{project.name}</div>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Portfolio;
