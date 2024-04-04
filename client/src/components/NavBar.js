import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isLoggedIn = userInfo && userInfo;

  const handleLogout = async () => {
    try {
      // Make a GET request to the logout endpoint
      const response = await fetch("/api/users/logout", {
        method: "GET",
        credentials: "include", // Include credentials (cookies) in the request
      });
  
      if (response.ok) {
        // Clear user info from local storage
        localStorage.removeItem("userInfo");
        
        // Clear token and user role from session storage
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userRole");
  
        // Navigate to the login page
        navigate("/login");
      } else {
        // If logout was unsuccessful, show an error message
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  

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

            {isLoggedIn ? (
              userInfo === "admin" ? (
                <li className="nav-item">
                  <NavLink
                    to="/admin"
                    className="btn btn-primary"
                    activeClassName="active"
                    style={{
                      backgroundColor: "#ff6300",
                      borderColor: "#ff6300",
                      marginTop: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : null
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#ff6300",
                      borderColor: "#ff6300",
                      marginTop: "5px",
                      marginLeft: "10px",
                    }}
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#ff6300",
                      borderColor: "#ff6300",
                      marginTop: "5px",
                      marginLeft: "10px",
                    }}
                    activeClassName="active"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              {isLoggedIn ? (
                <div
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#ff6300",
                    borderColor: "#ff6300",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                >
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
