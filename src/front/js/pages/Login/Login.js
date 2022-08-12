import React, { useState } from "react";
import { signInWithGoogle } from "../../store/Firebase";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useAuth } from "../../store/appContext";
import "../Login/login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();

  return (
    <div>
      <div className="Auth-form-container">
        <form
          className="Auth-form"
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(email, password);
            login(email, password)
              .then((response) => {
                console.log(response);
                navigate("/home");
              })
              .catch((error) => console.log(error.message))
              .finally(() => setIsSubmitting(false));
          }}
        >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
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
            <div className="form-group mt-3">
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
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#">Forgot your password?</a>
            </p>
            <hr />
            <div className="container">
              <div className="vertical-center">
                <GoogleButton onClick={signInWithGoogle} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
