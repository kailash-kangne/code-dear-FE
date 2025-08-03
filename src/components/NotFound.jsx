import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const isNested = location.pathname.split("/").filter(Boolean).length > 1;
  const navigate = useNavigate();

  useEffect(() => {
    if (isNested) {
      navigate("/", { replace: true });
    }
  }, [isNested, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <textarea
        className="form-control"
        rows="10"
        placeholder="Happy coding ..."
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "1500px",
          minHeight: "600px",
          fontSize: "1.3rem",
          padding: "1.5rem",
          resize: "none",
          borderRadius: "10px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
