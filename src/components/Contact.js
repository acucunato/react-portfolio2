import React from "react";
import resume from "../assets/resume/AlyssaCucunatoResume.pdf";

function Contact() {
  return (
    <div class="wrapper" id="contact">
      <div class="resume">
        <h1 class="pt-4 wow bounceInUp">let's get in touch</h1>
        <div class="horizontal-line"></div>
        <a href={resume} download target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            class="btn btn-outline btn-lg wow tada delay-1s"
          >
            <i class="fas fa-download"></i> download my resume
          </button>
        </a>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Contact;
