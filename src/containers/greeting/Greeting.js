import { from } from "apollo-link";
import React from "react";

import Lottie from 'react-lottie';
import animationData from '../../components/lottie/63487-programming-computer.json';
import "./Greeting.css";


export default function Greeting() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
      <h1 className="title">COMING SOON!</h1>
      <div className="greeting-image-div">
        <Lottie options={defaultOptions}
                  className="lottie"
                  height={600}
                  width={800}
                />
        </div>
        <div className="link">
          <a href ="https://github.com/Tejaaswini" target="_blank"
            rel="noopener noreferrer"
            className="github">GITHUB</a>
        </div>
      </div>
    </div>
  );
}
