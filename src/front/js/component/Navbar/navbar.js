import React, {useState, useEffect} from "react";
import "../../../styles/Navbar.css";


export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	
		const toggleNav = () => {
		setToggleMenu(!toggleMenu)
		}

		useEffect(() => {
	
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		}
	
		window.addEventListener('resize', changeWidth)
	
		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	
		}, [])

	return(
		<div className="photoBG">
			
			<nav className="navbar">
				<div className="navbar-container container">
					
					<ul className="menu-items">
						<li><a href="#">Log In</a></li>
						<li id="sign-up"><a href="#">Sign Up</a></li>
						
					</ul>
					<h1 className="logo">Logo</h1>
				</div>
   			</nav>
			<h1 className="header">Start the memories here.</h1>
			<h2 className="header2">Find local events happening near you</h2>
		</div>
			
		
		
	)
};
