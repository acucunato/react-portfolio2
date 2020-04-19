import React, { Component } from "react";
import portfolio from "../portfolio.json";
import PortfolioProject from "./PortfolioProject";

class Portfolio extends Component {
  state = {
    portfolio,
  };

  render() {
    return (
      <div class="wrapper" id="mywork">
        <div class="my-work">
          <h1 class="pt-4 wow bounceInUp">my work</h1>
          <div class="horizontal-line"></div>
          {/* <!-- project list start --> */}
          <div class="project-list wow fadeIn delay-1s">
            <div class="row">
              {this.state.portfolio.map((project) => (
                <PortfolioProject
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  photo={project.photo}
                  deploy={project.deploy}
                  github={project.github}
                  modalDesc={project.modalDesc}
                  modalTech={project.modalTech}
                />
              ))}
            </div>
          </div>
          <a href="#contact">
            <i class="fas fa-arrow-circle-down fa-2x wow rotateIn delay-1s"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
