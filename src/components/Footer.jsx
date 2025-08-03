import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p>
        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          aria-label="Bootstrap"
        >
          <img
            src="code-dear-logo.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Code Dear logo"
            width="700"
            height="500"
            loading="lazy"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
