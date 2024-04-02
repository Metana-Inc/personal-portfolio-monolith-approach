import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      if (response.data.role === "admin") {
        navigate("/admin");
        return;
      }
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Login</h2>
          {error && <div className="alert alert-danger mb-3">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "#ff6300",
                borderColor: "#ff6300",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
