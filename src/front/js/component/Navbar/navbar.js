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
			<nav class="navbar">
				<div class="navbar-container container">
					
					<ul class="menu-items">
						<li><a href="#">Log In</a></li>
						<li id="sign-up"><a href="#">Sign Up</a></li>
						
					</ul>
					<h1 class="logo">Logo</h1>
				</div>
   			</nav>
		</div>
			
		
		
	)
};
