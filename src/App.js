import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Splash from './components/sections/Splash';
import Portfolio from './components/sections/Portfolio';

function App() {
  return (
    <main>
      <Splash />
      <Portfolio />
    </main>
  );
}

export default App;
