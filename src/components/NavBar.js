import React from "react";
import { useState, useEffect } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import WOW from "wow.js";

function NavBar() {
  const [change, setChange] = useState(false);
  const changePosition = 300;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "#bcbcbf" : " #d9dde0",
    transition: "400ms ease",
    height: "100px",
    borderBottom: "5px solid #f3cfd0",
    right: 0,
    left: 0,
    top: 0,
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top"
      id="main-navbar"
      style={style}
    >
      <div className="nav-icons p-3 mr wow fadeIn" data-wow-delay="1s">
        <a
          class="navbar-brand"
          href="https://github.com/acucunato"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github-square fa-2x"></i>
        </a>
        <a
          class="navbar-brand"
          href="https://www.linkedin.com/in/alyssacucunato"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>

        <a class="navbar-brand" href="mailto:acucunato18@gmail.com">
          <i class="far fa-envelope fa-2x"></i>
        </a>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="scroll-text collapse navbar-collapse justify-content-end wow fadeIn"
        id="navbarSupportedContent"
      >
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#bio">
              about me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#mywork">
              my work
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
