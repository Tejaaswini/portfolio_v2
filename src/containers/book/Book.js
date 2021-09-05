import React from "react";
import { Fade } from "react-reveal";

import "./Book.css";

export default function Book() {
  return (
    <div className="book-main" id="book">
      <div className="book-main-div">
        <Fade left duration={1000}>
          <div className="book-image-div">
            <img src={require("../../assets/images/book.jpg")}></img>
            <a
              href="https://www.shroffpublishers.com/books/9789352138852/"
              target="_blank"
              style={{textDecoration:"none"}}
            >
              <p className="buy-book">Buy me!</p>
            </a>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="book-text-div">
            <h1 className="book-heading">Some Flexing</h1>

            <p className="book-text-subtitle">
              Ever gone through hundred and ten resources for blockchain and
              still not able to figure out where to start off. Well this book
              would lay the foundation for most of the concepts that you would
              require to at least get started somewhere and scratch the surface
              of this hyped technology.
              <br />
              <br />
              From the different underlying technicalities to the diversity of
              platforms, from the variety of scenarios where Blockchain fits to
              understanding when it would be an overkill, from learning the two
              most important platforms to getting you started for creating your
              own applications on top of them, from various simple humorous
              references to intriguing exercises, this book aims to not only
              make you feel comfortable with the technology but also confident
              enough to ponder more about it.
              <br />
              <br />
              Buy our book, fund our coffee!! 😋
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
