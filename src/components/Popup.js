import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../json/portfolio.json";

function Portfolio({ location, match }) {
  const { state = {} } = location;
  const { modal } = state;
  const num = parseInt(match.params.project);

  return (
    <div className={modal ? "popup" : "popup__hidden"}>
      <div className="popup__content">
        <div className="popup__links">
          {modal && (
            <Link to="/">
              <button className="popup__btn popup__btn--exit">&times;</button>
            </Link>
          )}

          <a
            href={portfolio[num].github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="popup__btn popup__btn--link">View Code</button>
          </a>
          <a
            href={portfolio[num].website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="popup__btn popup__btn--link">
              View Project
            </button>
          </a>
        </div>

        <img
          src={require(`../assets/images/portfolio/screenshots/portfolio-screenie-${portfolio[num].tag}.png`)}
          alt="project icon"
          className="img-fluid"
        />

        <div class="popup__text">
          {portfolio[num].description}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
