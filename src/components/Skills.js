import React from "react";

function Skills() {
  return (
    <div class="wrapper" id="skills">
      <div class="skills">
        <h1 class="pt-4 wow bounceInUp">skills</h1>
        <div class="horizontal-line"></div>
        <div class="skills-list">
          <div class="row" id="icon-row">
            <div class="col md-3 wow flipInX delay-1s">
              <i class="icon-html5 fa-3x"></i>
              <br />
              Developing modern UI with a mobile-first responsive design with
              HTML, CSS, Bootstrap and Media Queries.
              <br />
            </div>
            <div class="col md-3 wow flipInX delay-2s">
              <i class="icon-javascript-alt fa-3x"></i>
              <br />
              Writing client-side jQuery for interactivity and server-side
              JavaScript to solve problems.
              <br />
            </div>
            <div class="col md-3 wow flipInX delay-3s">
              <i class="icon-nodejs fa-3x"></i>
              <br />
              Creating dynamic web applications with the use of NodeJS and
              ReactJs.
            </div>
            <div class="col md-3 wow flipInX delay-4s">
              <i class="icon-database fa-3x"></i>
              <br />
              Storing, retrieving, and connecting servers to databases such as
              mySQL and MongoDB to perform queries.
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <a href="#mywork">
          <i class="fas fa-arrow-circle-down fa-2x wow rotateIn delay-4s"></i>
        </a>
      </div>
    </div>
  );
}

export default Skills;
