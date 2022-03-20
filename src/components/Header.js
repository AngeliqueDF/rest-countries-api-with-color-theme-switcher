import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to="/">
				<h1>Where in the world?</h1>
			</Link>

			<button>Dark theme</button>
		</header>
	);
};

export default Header;
