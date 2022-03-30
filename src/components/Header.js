import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme, darkThemeEnabled }) => {
	const handleToggleTheme = () => {
		toggleTheme();
	};
	return (
		<header>
			<h1>
				<Link to="/">Where in the world?</Link>
			</h1>

			<button className="toggle-theme capitalize" onClick={handleToggleTheme}>
				{darkThemeEnabled === true ? "Light mode" : "Dark mode"}
			</button>
		</header>
	);
};

export default Header;
