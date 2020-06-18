import React from "react";
import resume from "../assets/resume/AlyssaCucunatoResume.pdf";

function Contact() {
  return (
    <div class="wrapper" id="contact">
      <div class="resume">
        <h1 class="pt-4 wow bounceInUp">let's get in touch</h1>
        <div class="horizontal-line"></div>
        <div class="wow fadeIn delay-1s">
          I'd love to work with you! Feel free to reach out via email or
          download my resume.
        </div>
        <br />

        <div class="row">
          <div class="col-lg-7">
            <a href={resume} download target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                class="btn btn-outline btn-lg wow fadeIn delay-2s"
              >
                <i class="fas fa-download"></i> download my resume
              </button>
            </a>
          </div>
          <div class="col-lg-3">
            <a href="mailto:acucunato18@gmail.com">
              <button
                type="button"
                class="btn btn-outline btn-lg wow fadeIn delay-2s"
              >
                <i class="fa fa-envelope"></i> acucunato18@gmail.com
              </button>
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Contact;
