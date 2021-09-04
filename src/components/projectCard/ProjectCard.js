import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({projectDetails}) {
  return (
    <div>
      <div class="container">
        <div class="rectangle">
          <div class="diagonal-fill"></div>
          <div class="project-card-title">{projectDetails.title}</div>
          <p className="project-card-subtitle">{projectDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={projectDetails.code_url} target="_" class="project-button">
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
