import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import darkModeIcon from "./../../images/icon-dark-mode.svg";
import lightModeIcon from "./../../images/icon-light-mode.svg";

import { renderHook, act } from "@testing-library/react-hooks";
import useThemeToggler from "../../utils/hooks/useThemeToggler";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import App from "./../../App";

// Solve "TypeError: window.matchMedia is not a function"
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
});
