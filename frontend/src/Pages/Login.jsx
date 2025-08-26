// src/Pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from '../Components/Assets/Images/vxlogo.png'; // Your logo
import loginbg from '../Components/Assets/Images/loginbg.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, { email, password });
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        setError(res.data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error, please try again");
    }
  };

  // Responsive background image style
  const backgroundStyle = {
    backgroundImage: `url(${loginbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "70px",
  };

  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{
        ...backgroundStyle,
        backgroundImage:
          window.innerWidth >= 768 ? `url(${loginbg})` : "none", // hide bg on small screens
      }}
    >
      <div className="row flex-grow-1">
        <div className="col-12 col-md-6 d-flex align-items-start align-items-md-center justify-content-center px-3">
          <div
            className="card text-white bg-black p-4 w-100"
            style={{
              maxWidth: "400px",
              marginTop: window.innerWidth < 768 ? "40px" : "0", // push card down on mobile
            }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-center mb-3">
                <img src={logo} alt="Logo" className="navbar-logo" />
              </div>
              <h2 className="card-title text-center mb-2">Welcome Back</h2>
              <p className="text-center text-light mb-3">
                Don’t have an account yet?{" "}
                <a href="/signup" className="text-info">Sign up</a>
              </p>

              {error && <p className="text-danger text-center">{error}</p>}

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="get-in-touch-btn  w-100">Login</button>
              </form>

              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-light">or</span>
                <hr className="flex-grow-1" />
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-light flex-fill">🍎</button>
                <button className="btn btn-light flex-fill">🌐</button>
                <button className="btn btn-light flex-fill">❌</button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional right side */}
        <div className="d-none d-md-block col-md-6"></div>
      </div>
    </div>
  );
};

export default Login;
