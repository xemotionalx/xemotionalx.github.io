import React, { useState } from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// COMPONENTS
import Splash from "./components/sections/Splash";
import Portfolio from "./components/sections/Portfolio";

//REACT ANIMATION
import { CSSTransition } from "react-transition-group";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  return (
    <main>
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
        <Portfolio {...showPortfolio} />
      </CSSTransition>
    </main>
  );
}

export default App;
