import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import portfolio from "../../json/portfolio.json";

function Portfolio(props) {
  const [showPortfolio, setShowPortfolio] = useState(props);

  useEffect(() => {
    setShowPortfolio(props);
   
  }, [props]);

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
          </Col>
        ))}
      </Row>
      
    </section>
  );
}


export default Portfolio;
