import React from "react";
import { MenuItems } from "./MenuItems";
import "../../../styles/Navbar.css";
export const Navbar = () => {
	
	state = { clicked: false }
	
	return (
		<nav className="NavbarItems navbar-light bg-light">
			<h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
			<div className="menu-icon" onClick ={this.handleClick}>
				<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
			</div>
			<ul>
				{MenuItems.map((item, index) =>{
					return (
						<li key={index}>
							<a className={item.cName} href= {item.url}>
							{item.title}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	);
};
