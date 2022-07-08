import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = ({ toggleTheme, darkThemeEnabled }) => {
  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <StyledHeader>
      <h1>
        <Link to="/">Where in the world?</Link>
      </h1>

      <button
        className="toggle-theme capitalize"
        onClick={handleToggleTheme}
      >
        {darkThemeEnabled === true ? "Light mode" : "Dark mode"}
      </button>
    </StyledHeader>
  );
};

export default Header;
