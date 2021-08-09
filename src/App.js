import React from "react";
import Lottie from '../node_modules/react-lottie';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import animationData from './Assets/lottie/coming_soon.json';



function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Router>
      <div className="App">
      <Lottie options={defaultOptions}
                  className="lottie"
                  height={800}
                  width={1500}
                />
        <h3 style={{marginTop:'5vh'}}>
          <a href="https://github.com/Tejaaswini">Tejaaswini Narendra </a>
        </h3>
      </div>
    </Router>
  );
}

export default App;
