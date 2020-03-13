import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// COMPONENTS
import Splash from "./components/sections/Splash";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
      <main>
        <Navbar />
        <Splash />

      </main>
      </Switch>
    </Router>
  );
}



export default App;
