import React from "react";
import "./Vector.css";
import { Fade } from "react-reveal";

import Button from "../../components/button/Button";

export default function Vectors() {
  return (
    <div className="vector-main">
      <Fade bottom duration={1000} distance="20px">
        <p className="vector-heading" align="center">
          Vectors/Illustrations
        </p>
        <div className="vector">
          <img src={require("../../assets/images/lion.jpg")} alt="" />
          <img src={require("../../assets/images/anime.jpg")} alt=""/>
          <img src={require("../../assets/images/cat.jpg")} alt=""/>
        </div>
        <div className="button-view">
          <a
            href="https://www.instagram.com/messy_dodo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button text="View more!" />{" "}
          </a>
        </div>
      </Fade>
    </div>
  );
}
