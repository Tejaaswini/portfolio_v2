import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Projects() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div className="project-header">
        <h1 className="project-header-title" align="center">{projectSection.title}</h1>
        <p className="subTitle project-header-subtitle" align="center">{projectSection.subtitle}</p>
        <div className="project-cards-div">
          {projectSection.project.map(project => {
            return (
              <ProjectCard
                projectDetails={{
                  title: project.title,
                  subtitle: project.subtitle,
                  code_url: project.code_url,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
