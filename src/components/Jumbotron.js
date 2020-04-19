import React from "react";
import pinksmoke from "../assets/img/pinksmoke.jpg";

function Jumbotron() {
  return (
    <div class="card">
      <img src={pinksmoke} class="card-img" alt="pinksmoke" height="600px" />
      <div class="card-img-overlay">
        <br />
        <br />
        <br />
        <h1 class="card-title p-3 wow fadeIn" id="jumbotron-text">
          alyssa cucunato
        </h1>
        <div class="horizontal-line"></div>
        <h4 class="card-text p-3 wow fadeIn delay-1s" id="main-text">
          ambitious full-stack web developer with a passion for creating and
          learning
          <br />
          <br />
          <br />
          <br />
          <div id="bio-btn">
            <a href="#bio">
              <button
                type="button"
                class="btn btn-outline btn-lg wow fadeIn delay-1s"
              >
                <i class="fas fa-arrow-down wow rotateIn delay-2s"></i>
                get to know me
              </button>
            </a>
          </div>
        </h4>
      </div>
    </div>
  );
}

export default Jumbotron;
