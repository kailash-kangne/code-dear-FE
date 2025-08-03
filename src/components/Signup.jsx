import React, { useState } from "react";

const Signup = () => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");

  return (
    <div>
      <div className="container d-flex justify-content-center card p-4">
        <h1 className="is-title text-center mb-4">Sign up</h1>

        <div className="login-form-container">
          <form className="full-width">
            <div className="form-field mb-3">
              <label htmlFor="name">Your full name </label>
              <input
                type="text"
                className="full name"
                placeholder="Enter Name"
                value={inputNameValue}
                onChange={(e) => setInputNameValue(e.target.value)}
              />
            </div>
            <div className="form-field mb-3">
              <label htmlFor="email">Email address </label>
              <input
                type="text"
                className="Email address"
                placeholder="Enter Email"
                value={inputEmailValue}
                onChange={(e) => setInputEmailValue(e.target.value)}
              />
            </div>
            <div className="form-field mb-3">
              <label htmlFor="password">Password </label>
              <input
                type="text"
                className="Password"
                placeholder="Enter Password"
                value={inputPasswordValue}
                onChange={(e) => setInputPasswordValue(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </form>
          <p className="aligncenter mt-3">
            Already signed up? <a href="/login">Log in</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
