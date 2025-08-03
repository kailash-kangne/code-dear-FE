import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const Navbar = ({ ShareCode }) => {
  const location = useLocation();

  const isFrontPage = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-1 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
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
            <img
              src="code-dear-name.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Code Dear Name"
              width="700"
              height="500"
              loading="lazy"
            />
          </a>
        </div>
        {isFrontPage && (
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/features" className="nav-link px-2">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="nav-link px-2">
                Pricing
              </Link>
            </li>
          </ul>
        )}
        {!isAuthPage && (
          <div className="col-md-3 text-end">
            {ShareCode && (
              <Link
                type="button"
                className="btn btn-outline-primary me-2"
                to="/"
              >
                Share
              </Link>
            )}
            <Link
              type="button"
              className="btn btn-outline-primary me-2"
              to="/login"
            >
              Login
            </Link>
            <Link type="button" className="btn btn-primary" to="/signup">
              Sign-up
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
