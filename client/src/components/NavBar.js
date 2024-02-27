import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/Logo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + (menuOpen ? "show" : "")}>
          <ul
            className="navbar-nav ml-auto"
            style={{ fontSize: "21px", margin: "0 auto" }}
          >
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  margin: "0 10px",
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  margin: "0 10px",
                }}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  margin: "0 10px",
                }}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/testimonials"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  margin: "0 10px",
                }}
              >
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  margin: "0 10px",
                }}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  margin: "0 10px 0 70px",
                }}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
