import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<h1>
				<Link to="/">Where in the world?</Link>
			</h1>

			<button className="toggle-theme capitalize">Dark mode</button>
		</header>
	);
};

export default Header;
