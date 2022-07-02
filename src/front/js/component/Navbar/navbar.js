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
			<nav id="nav-tag">
			<ul className="list">
				<li className="items">Logo</li>
				<li className="items">Log In</li>
				<li className="items">Sign In</li>
			</ul>
			<button onClick={toggleNav} className="btn">BTN</button>
			</nav>
		</div>
			
		
		
	)
};
