import React, { useState } from "react";
import { Login } from "./Login";
import {
  // onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../store/Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/signup.css";

export const SignUp = () => {
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerFirstName,
        registerLastName,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="signup-form-container">
        <form className="signup-form">
          <div className="signup-content">
            <h3 className="signup-form-title">Register</h3>
            <div className=" form-group mt-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => {
                  setRegisterFirstName(e.target.value);
                }}
              />
            </div>
            <div className=" form-group mt-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => {
                  setRegisterLastName(e.target.value);
                }}
              />
            </div>
            <div className=" form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
            </div>
            <div className=" form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={register}
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
