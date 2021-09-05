import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
        <div className="skills-image-div">
          <img src={require("../../assets/images/what_i_know.svg")}></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="skills-text-subtitle">{skillsSection.subTitle}</p> 
          <SoftwareSkill />
        </div>
        </Fade>
      </div>
    </div>
  );
}
