import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import portfolio from "../../json/portfolio.json";


function Portfolio() {
  return (
    <section className="section-portfolio full-width">
      <div className="container">
      <Row className="d-flex align-items-center justify-content-center vh-100">
      
      
        {portfolio.map(project => (
          <Col lg={4} xs={6} key={project.id}>
            <Link to={{
                pathname: `popup/${project.id}`,
                state: { modal: true, portfolio: portfolio }
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
      </div>
      
    </section>
  );
}


export default Portfolio;
