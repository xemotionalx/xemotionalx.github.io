import React, { useState } from "react";
import ResumePDF from "../../assets/images/MaiAda-Carpano-Resume.pdf";
import Splash from "./Splash";
import Portfolio from "./Portfolio";

//REACT ANIMATION
import { CSSTransition } from "react-transition-group";

function Home() {

  const [showSplash, setShowSplash] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <section className="section-home full-width">
      <div className="row vh-100">
        <div className="col-lg-7 col-md-7 col-sm-11 d-flex justify-content-center align-items-center">
          <div className="heading-home align-self-center">
          <div>
      <h1 className="heading-home--main u-margin-bottom-big">MaiAda Carpano</h1>
      <h1 className="heading-home--sub  u-margin-bottom-medium">
        Web Developer
      </h1>

      <div className="mb-5 u-center-text">
        <button
          className="btn--default rounded mr-5"
          onClick={() => setShowPortfolio(true)}
        >
          Portfolio
        </button>

        <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
          <button className="btn--default rounded">Resume</button>
        </a>
      </div>

      <button className="btn btn--circle btn-icon">
        <a
          href="mailto:maiadacx@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-envelope btn__icon"></i>
        </a>
      </button>

      <button className="btn btn--circle btn-icon">
        <a
          href="https://github.com/xemotionalx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-alt btn__icon"></i>
        </a>
      </button>

      <button className="btn btn--circle btn-icon">
        <a
          href="https://www.linkedin.com/in/maiadac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in btn__icon"></i>
        </a>
      </button>
    </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-11  d-flex justify-content-center align-items-center">
          <CSSTransition
            in={showSplash}
            appear={true}
            unmountOnExit
            timeout={300}
            classNames="fade"
          >
            <Splash />
          </CSSTransition>


          <CSSTransition
            in={showPortfolio}
            appear={false}
            unmountOnExit
            timeout={300}
            classNames="fade"
            onEnter={() => setShowSplash(false)}
            onExited={() => setShowSplash(true)}
          >
            <Portfolio />
          </CSSTransition>
          
        </div>
      </div>
    </section>
  );
}

export default Home;
