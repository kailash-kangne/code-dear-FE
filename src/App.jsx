import React from "react";
import Navbar from "./components/Navbar";
import Frontpage from "./components/Frontpage";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";

function App() {
  const location = useLocation();
  const known = ["/", "/login", "/signup", "/about"];
  const share = !known.includes(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar ShareCode={share} />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
