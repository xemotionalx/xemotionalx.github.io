import React from "react";
import { Link } from "react-router-dom";
import ResumePDF from "../../assets/images/MaiAda-Carpano-Resume.pdf";

function Navbar() {
  return (
    <nav className="navbar sticky-top">
      <div class="container">
        <div className="navbar__logobox navbar-brand">emotional unicorn</div>

        <div>
          <Link to="/portfolio">Portfolio</Link>
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="!#">Home</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
