import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="nav-bar-brand">
				<Link to="/">FLIXHQ-00</Link>
			</div>
			<div className="navbar-links">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/favorites" className="nav-link">
					Favorites
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
