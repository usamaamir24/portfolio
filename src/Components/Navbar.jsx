import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import myimg from '../Media/services.jpg';


export default function Navbar() {
  return (
    <header id="header" className="header sticky-top">
      {/* Main branding and nav menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo Section */}
          <Link to="/" className="navbar-brand">
            <h1 className="sitename" style={{ fontSize: "30px", margin: 0 }}>
              JA
            </h1>
          </Link>

          {/* Mobile Nav Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className="navmenu collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" >
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>

              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
                <Link
                  to=""
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="" className="dropdown-item">
                      Dropdown 1
                    </Link>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to="" className="dropdown-item dropdown-toggle">
                      Deep Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="" className="dropdown-item">
                          Deep Dropdown 1
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item">
                          Deep Dropdown 2
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item">
                          Deep Dropdown 3
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item">
                      Dropdown 2
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item">
                      Dropdown 3
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item">
                      Dropdown 4
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container hero position-relative">
          <h1>I'm USAMA AMIR</h1>
          <h2>A Front-end Developer</h2>
          <p>A new work from Colorlib</p>
        </div>
      </section>
    </header>
  );
}
