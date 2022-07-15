import React from "react";
import { User } from "../Login/User";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../store/Firebase";
import "../Login/login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = (props) => {
  const [
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  ] = props;

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mt-1"
                placeholder="Email Address"
              />
              <p className="errorMsg">{emailError}</p>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                autoFocus
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mt-1"
                placeholder="Password"
              />
              <p className="errorMsg">{passwordError}</p>
            </div>
            <div className="d-grid gap-2 mt-3">
              {hasAccount ? (
                <>
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                  <p>
                    Don't have an account ?{" "}
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSignup}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                  <p>
                    Have an account ?{" "}
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Log In
                    </span>
                  </p>
                </>
              )}
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#">Forgot your password?</a>
            </p>
            <hr />
            <div class="container">
              <div class="vertical-center">
                <GoogleButton onClick={signInWithGoogle} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
