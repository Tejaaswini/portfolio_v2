import React, { Component } from "react";
import Greeting from "./greeting/Greeting";
import Intro from "./intro/Intro";
import WorkExperience from "./workExperience/WorkExperience";
import Skills from "./skills/Skills";
import Top from "./topbutton/Top";
import Contact from "./contact/Contact";
import Book from "./book/Book";
import Projects from "./projects/Projects";
import Vectors from "./vector/Vector";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Greeting />
        <Intro />
        <Skills />
        <WorkExperience />
        <Projects />
        <Book />
        <Vectors />
        <Contact />
        <Top />
      </div>
    );
  }
}
