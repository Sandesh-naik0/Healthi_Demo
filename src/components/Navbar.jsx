import React from "react";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar section-content">
          <a href="#" className="nav-logo">
            <h2 className="logo-text">Healthi</h2>
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">
                App
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                HealthiCare
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href={<Login />} className="nav-link">
                Login
              </a>
            </li>
            {/* <button>
                  <a href="#" className='nav-link'>
                    Login
                    </a>
                    </button>
                    {/* <Router>
                      <Routes> */}
            {/* <button> */}
            {/* <link to="/login" element={<Login />}>Sign Up</link> */}
            {/* </button> */}
            {/* </Routes>
                </Router> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
