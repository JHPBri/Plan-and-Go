import React, { useState } from "react";
import {
  // onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../store/Firebase";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../store/Firebase";
import "../Login/login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {};

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
                onChange={(e) => setLoginEmail(e.target.value)}
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                autoFocus
                required
                onChange={(e) => setLoginPassword(e.target.value)}
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div>
              <button onClick={login} type="submit" className="btn btn-primary">
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
