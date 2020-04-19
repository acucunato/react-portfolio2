import React from "react";
import aboutme from "../assets/img/aboutmeimg2.png";

function AboutMe() {
  return (
    <div class="wrapper" id="bio">
      <div class="about-me">
        <h1 class="pt-4 wow bounceInUp">about me</h1>
        <div class="horizontal-line"></div>
        <div class="row bio wow fadeIn delay-1s">
          <div class="col-md-4">
            <img src={aboutme} height="350px" width="200px" alt="aboutmepic" />
          </div>
          <div class="col-md">
            <br />
            Hi! My name is Alyssa. I started my journey in web development at
            the University of Pennsylvania's intensive Coding Bootcamp in
            Philadelphia, PA. I have experience in HTML5, Javascript, Node.js,
            Express.js, and MySQL database. I am always eager to find new ways
            to master my coding skills while keeping up with the latest
            technologies.
            <br />
            <br />
            Prior to web development, I graduated from Philadelphia University
            with a Bachelor of Science in Fashion Merchandising as well as ten
            years of experience in the fields of operations, management, and
            sales. I am hoping to continue to utilize skills learned in my
            previous industry to embark on this new journey in coding and web
            development.
          </div>
        </div>
        <br />
        <br />
        <a href="#skills">
          <i class="fas fa-arrow-circle-down fa-2x wow rotateIn delay-2s"></i>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
