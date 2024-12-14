import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Getting data from store
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@gmail.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Successful");
      navigate("/profile");
    } else {
      toast.error("Invalid email or password");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <div className="formContainer min-vh-100  d-flex felx-column align-items-center justify-content-center">
        <form className="shadow-lg p-5 rounded-3" onSubmit={handleSubmit}>
          <h4 className="formHeading text-light mb-3">
            User Management System{" "}
          </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="formSignupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/">Signup !</Link>
            </p>
          </div>
          <button
            type="submit"
            className="formButton w-100 p-2 bg-black bg-gradient bg-opacity-75 text-light rounded-3 border-0 "
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
