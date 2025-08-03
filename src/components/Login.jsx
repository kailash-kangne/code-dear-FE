import React, { useState } from "react";

const Login = () => {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");

  return (
    <div>
      <div className="container d-flex justify-content-center card p-4">
        <h1 className="is-title text-center mb-4">Login</h1>
        <div className="login-form-container">
          <form className="full-width">
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
              Login
            </button>
          </form>
          <p className="aligncenter mt-3">
            New User? <a href="/signup">Register</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
