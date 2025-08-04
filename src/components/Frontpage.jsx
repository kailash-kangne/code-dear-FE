import React from "react";
import { Link } from "react-router-dom";

function generateRandomPath() {
  return "/" + Math.random().toString(36).slice(2, 8);
}

const Frontpage = () => {
  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="codeshare.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Codeshare"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Real Time Coding Editor
          </h1>
          <p className="lead">
            <u>Super Simple Single</u> platform to <u>Code Collaborate Chat</u>{" "}
            anywhere with anyone.
            <br />
            <br />
            Built with passion for <u>Dear Coders</u> like <u>You</u>.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              to={generateRandomPath()}
            >
              Start FREE
            </Link>
            <Link
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              to="/pricing"
            >
              Go PRO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
