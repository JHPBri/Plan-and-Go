import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Controlbar } from "../component/controlbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Controlbar />
	)

};
