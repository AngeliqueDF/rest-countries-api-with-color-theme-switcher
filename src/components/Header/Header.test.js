import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import darkModeIcon from "./../../images/icon-dark-mode.svg";
import lightModeIcon from "./../../images/icon-light-mode.svg";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import App from "./../../App";

// Solve window.matchMedia is not a function error
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Header", () => {
  test("Renders Header component", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText("Where in the world?")).toBeInTheDocument();
    expect(screen.getByTestId("theme-toggler")).toBeInTheDocument();
  });

  test("Calls toggleTheme prop when 'Dark Mode' button is clicked.", async () => {
    const handleClick = jest.fn();
    render(
      <Router>
        <Header darkThemeEnabled={false} toggleTheme={handleClick} />
      </Router>
    );

    await userEvent.click(screen.getByText("Dark mode"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("When dark mode is enabled, the theme toggler displays the light mode icon and text", () => {
    render(
      <Router>
        <Header darkThemeEnabled={true} />
      </Router>
    );

    expect(screen.getByRole("button")).toHaveStyle(
      `background-image: url(${lightModeIcon})`
    );
    expect(screen.getByText("Light mode")).toBeInTheDocument();
  });

  test("When light mode is enabled, the theme toggler displays the dark mode icon and text", () => {
    render(
      <Router>
        <Header darkThemeEnabled={false} />
      </Router>
    );

    expect(screen.getByRole("button")).toHaveStyle(
      `background-image: url(${darkModeIcon})`
    );
    expect(screen.getByText("Dark mode")).toBeInTheDocument();
  });
});

});
