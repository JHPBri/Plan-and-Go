import React from "react";
import "../../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Controlbar } from "../component/controlbar";

import {FeaturedCategories } from "../component/FeaturedCategories";
import { Discover } from "../component/discover";

export const Home = () => {
	const { store, actions } = useContext(Context);

	

	return (
		<div>
			<div className="photoBG container-fluid">
			<h1 className="header">Start the memories here.</h1>
      		<h2 className="header2">Find local events happening near you</h2>
		
			</div>
			<Controlbar />
			<FeaturedCategories/>
			<Discover />
		</div>
		
	)

export const Home = () => {
  return (
    <div>
      <div className="photoBG container-fluid">
        <h1 className="header">Start the memories here.</h1>
        <h2 className="header2">Find local events happening near you</h2>
      </div>
      <Controlbar />
      <FeaturedCategories />
    </div>
  );
};
