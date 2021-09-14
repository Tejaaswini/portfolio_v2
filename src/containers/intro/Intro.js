import React from "react";
import { Fade } from "react-reveal";

import "./Intro.css";

export default function Intro() {
    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="intro-main">
          <h1 className="intro-mainText" align="center"style={{paddingTop:"40px"}}>How I Introduce Myself!</h1>
          <p align="center" className="intro-desc">A Computer Science graduate making way as a Full Stack Developer, having a keen interest in Blockchain as well befriending <br/>Stack Overflow and GitHub. 
              <br/>Also an Illustrator and a Blogger. I speak sarcasm and is driven by caffeine, puns and dark humor.</p>
          <h1 align="center" className="intro-hashtag" style={{color:"#e53170"}}>#batchof2020</h1>    
        </div>
        </Fade>
    );
}
