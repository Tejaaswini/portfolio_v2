import React from "react";

import Lottie from 'react-lottie';
import animationData from '../../components/lottie/8306-programming-animation.json';

import "./Greeting.css";

import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

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
      <div className="greeting-image-div">
        <Lottie options={defaultOptions}
                  className="lottie"
                  height={300}
                  width={300}
                /> 
        </div>
        <div className="greeting-text-div"> 
          <div>
          <h1 className="greeting-mainText">
              {" "}
              {greeting.mainTitle}
              {" "}
            </h1>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
            </h1>
            <p className="greeting-text-p subTitle">I Churn <span style={{color:"#ff8906"}}>Ideas</span> into <span style={{color:"#e53170"}}>Reality</span>!</p>
            <div className="button-greeting-div">
              <Button text="Let's Connect!" href="#contact" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
