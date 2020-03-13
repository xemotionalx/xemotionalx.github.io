import React from "react";
import SelfPortraitImg from "../../assets/images/about-me/selfportrait.png";

function Splash() {
  return (
    <section className="section-home full-width">
      <div className="row vh-100">
        <div className="col-lg-12 d-flex align-items-center justify-content-center">
          <div className="home-heading heading-home">
            <h1 className="heading-home heading-home--main u-margin-bottom-medium">
              MaiAda Carpano
            </h1>
            <h1 className="heading-home heading-home--sub u-margin-bottom-small">
              Full Stack Web Developer
            </h1>

            <button className="btn btn__icon--gradient mr-2">
              <a
                href="mailto:maiadacx@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope btn__icon--gradient"></i>
              </a>
            </button>

            <button className="btn btn__icon--gradient mr-2">
              <a
                href="https://github.com/xemotionalx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square btn__icon--gradient"></i>
              </a>
            </button>

            <button className="btn btn__icon--gradient">
              <a
                href="https://www.linkedin.com/in/maiadac/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin btn__icon--gradient"></i>
              </a>
            </button>
          </div>


          <div className="home-box">
            <a href="#section-about">
              <img
                src={SelfPortraitImg}
                alt="self portrait"
                className="home-img img-fluid"
              />
            </a>
          </div>
    

        </div>
      </div>
    </section>
  );
}

export default Splash;
