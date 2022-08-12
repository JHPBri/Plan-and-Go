import React, { useState, useEffect, useRef } from "react";
import { Login } from "./Login";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/signup.css";
import { useAuth } from "../../store/appContext";

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register } = useAuth();

  return (
    <div>
      <div className="signup-form-container">
        <form
          className="signup-form"
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(email, password);
            register(email, password)
              .then((response) => console.log(response))
              .catch((error) => console.log(error.message))
              .finally(() => setIsSubmitting(false));
          }}
        >
          <div className="signup-content">
            <h3 className="signup-form-title">Register</h3>
            <div className=" form-group mt-3"></div>
            <div className=" form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                autoComplete="email"
                placeholder="Enter email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className=" form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                placeholder="Enter password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              // onClick={register}
            >
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered{" "}
              <a href="login" onClick={Login}>
                log in?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
