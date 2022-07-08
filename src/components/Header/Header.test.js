import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import darkModeIcon from "./../../images/icon-dark-mode.svg";
import lightModeIcon from "./../../images/icon-light-mode.svg";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

describe("Header", () => {
  test("Renders Header component", () => {
    render(
      <Router>
        <Header darkThemeEnabled={false} />
      </Router>
    );

    screen.getByText("Where in the world?");
    expect(screen.getByText("Where in the world?")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle(
      `background-image: url(${darkModeIcon})`
    );
  });

});
