import React from "react";

function PortfolioProject(props) {
  return (
    <div class="col-md-4" key={props.key}>
      {/* <!-- poochquest --> */}
      {/* eslint-disable-next-line */}
      <a data-toggle="modal" data-target={`#modal${props.id}`}>
        <img
          src={props.photo}
          class="d-block w-100 img-port"
          alt={props.name}
        />
      </a>
      <div
        class="modal fade"
        id={`modal${props.id}`}
        data-backdrop="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <h5 class="mod-head">{props.name}</h5>
            <div class="project-underline"></div>
            <div class="modal-body">
              <img src={props.photo} class="mod-pic" alt={props.name} />
              <br />
              <p>{props.modalDesc}</p>
              <p>
                Tech Used: {props.modalTech} <br />
              </p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn">
                <a
                  href={props.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mod-btn"
                >
                  View The App
                </a>
              </button>
              <button type="button" class="btn">
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mod-btn"
                >
                  GitHub Repo
                </a>
              </button>
              <button type="button" class="btn" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end --> */}
    </div>
  );
}

export default PortfolioProject;
