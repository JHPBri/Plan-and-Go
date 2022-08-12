import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { AuthContextProvider } from "./store/appContext";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/Login/SignUp";
import { Profile } from "./pages/Profiles/Profile";
import { EditProfile } from "./pages/Profiles/editProfile";
import { Navbar } from "./component/Navbar/navbar";
import { Footer } from "./component/footer";

import {Art} from "./pages/Search/Art/Art";
import {Sports} from "./pages/Search/Sports/Sports";
import {Music} from "./pages/Search/Music/Music";
import {Food} from "./pages/Search/Food/Food";
import { Shopping } from "./pages/Search/Shopping/Shopping";

//create your first component
export const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Art />} path="/Art" />
              <Route element={<Sports />} path="/Sports" />
              <Route element={<Music />} path="/Music" />
              <Route element={<Food />} path="/Food+drinks" />
              <Route element={<Shopping />} path="/Shopping" />
              <Route element={<Demo />} path="/demo" />
              <Route element={<Single />} path="/single/:theid" />
              <Route element={<Login />} path="/login" />
              <Route element={<SignUp />} path="/signup" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<EditProfile />} path="/edit-profile" />
              <Route element={<h1>Not found!</h1>} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
};
