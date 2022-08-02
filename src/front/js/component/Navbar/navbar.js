import React, { useState, useEffect } from "react";
import "../../../styles/Navbar.css";
import { Login } from "../../pages/Login/Login";
import { SignUp } from "../../pages/Login/SignUp";
import Logo from "../../../img/Plan-N-Go.png";
import { Home } from "../../pages/home";

export const Navbar = () => {
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
              <a href="login" onClick={Login}>
                Sign In
              </a>
            </li>
            <li id="sign-up" onClick={SignUp}>
              <a href="signup">Sign Up</a>
            </li>
          </ul>
          <a href="https://3000-jhpbri-planandgo-j6w14b7nhw4.ws-us54.gitpod.io/">
            <img src={Logo} alt="logo" className="logo" />
          </a>
        </div>
      </nav>
    </div>
  );
};
