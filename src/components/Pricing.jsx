import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Pricing Plans</h2>

      <div className="row g-4">
        {/* Free Plan */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="card-title text-primary">Free Plan</h3>
              <h1 className="display-4 mb-3">
                <span className="text-muted">$</span>0
              </h1>
              <p className="text-muted">Perfect for guests</p>

              <ul className="list-unstyled mb-4">
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  Basic Access
                </li>
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  Limited Features
                </li>
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  Community Support
                </li>
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faTimes} className="text-danger me-2" />
                  Priority Support
                </li>
                <li className="py-2">
                  <FontAwesomeIcon icon={faTimes} className="text-danger me-2" />
                  Advanced Features
                </li>
              </ul>

              <Link to="/signup" className="btn btn-outline-primary w-100">
                Start Free
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="card-title text-primary">Premium Plan</h3>
              <h1 className="display-4 mb-3">
                <span className="text-muted">$</span>40
                <small className="text-muted">/month</small>
              </h1>
              <p className="text-muted">Best value for professionals</p>

              <ul className="list-unstyled mb-4">
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  Full Access
                </li>
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  All Features
                </li>
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  Priority Support
                </li>
                <li className="py-2 border-bottom">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  Advanced Features
                </li>
                <li className="py-2">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  Dedicated Team
                </li>
              </ul>

              <Link to="/signup" className="btn btn-primary w-100">
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
