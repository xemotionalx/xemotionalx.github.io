import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// COMPONENTS
import Splash from "./components/sections/Splash";
import Portfolio from "./components/sections/Portfolio";
import Popup from "./components/Popup";

function App() {
  return (
    <Router>
      <Switch>
      <main>
        <Splash />
        <Portfolio />

        <Route path="/popup/:project" component={Popup} />
      </main>
      </Switch>
    </Router>
  );
}

export default App;
