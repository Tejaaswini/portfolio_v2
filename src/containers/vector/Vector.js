import React from "react";
import "./Vector.css";
import { Fade } from "react-reveal";

import Button from "../../components/button/Button";

export default function Vectors() {
  return (
    <div className="vector-main">
      <Fade bottom duration={1000} distance="20px">
        <p className="vector-heading" align="center">
          Some Vectors!
        </p>
        <div className="vector">
          <img src={require("../../assets/images/lion.jpg")} />
          <img src={require("../../assets/images/anime.jpg")} />
          <img src={require("../../assets/images/cat.jpg")} />
        </div>
        <div className="button-view">
          <a
            href="https://www.instagram.com/tej_naren/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button text="View more!" />{" "}
          </a>
        </div>
      </Fade>
    </div>
  );
}
