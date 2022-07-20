import React, { useState, useEffect } from "react";
import "../../../styles/Navbar.css";
import { Login } from "../../pages/Login/Login";
import {Home} from "../../pages/home"

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
                Log In
              </a>
            </li>
            {/* <li id="sign-up" onClick="">
              <a href="#">Sign Up</a>
            </li> */}
          </ul>
          <a href="home" onClick={Home}><h1 className="logo">Logo</h1></a>
        </div>
      </nav>
      
    </div>
  );
};
