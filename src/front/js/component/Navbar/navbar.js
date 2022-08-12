import React, { useState, useEffect } from "react";
import "../../../styles/Navbar.css";
import { Login } from "../../pages/Login/Login";
import { SignUp } from "../../pages/Login/SignUp";
import Logo from "../../../img/Plan-N-Go.png";
import { Profile } from "../../pages/Profiles/Profile";
import { useAuth } from "../../store/appContext";

export const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
          <ul className="menu-items">
            <li>
              {!currentUser && (
                <a href="login" onClick={Login}>
                  Sign In
                </a>
              )}
            </li>
            {!currentUser && (
              <li id="sign-up" onClick={SignUp}>
                <a href="signup">Sign Up</a>
              </li>
            )}
            <li>
              {currentUser && (
                <a href="profile" onClick={Profile}>
                  Profile
                </a>
              )}
            </li>

            <li>
              {currentUser && (
                <a
                  href="logout"
                  name="logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  Logout
                </a>
              )}
            </li>
          </ul>
          <a href="/">
            <img src={Logo} alt="logo" className="logo" />
          </a>
        </div>
      </nav>
    </div>
  );
};
