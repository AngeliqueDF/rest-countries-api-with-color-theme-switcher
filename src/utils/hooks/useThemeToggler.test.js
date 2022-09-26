import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import darkModeIcon from "./../../images/icon-dark-mode.svg";
import lightModeIcon from "./../../images/icon-light-mode.svg";

import { renderHook, act } from "@testing-library/react-hooks";
import useThemeToggler from "./useThemeToggler.js";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "../../components/Header/Header";

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

describe("Dark theme", () => {
  describe("Header", () => {
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

describe("useThemeToggler hook ", () => {
  test("useThemeToggler hook disables dark theme", () => {
    const { result } = renderHook(() => useThemeToggler(true));

    act(() => {
      result.current.handleThemeToggle();
    });

    expect(result.current.darkThemeEnabled).toBe(false);
  });
  test("useThemeToggler hook enables dark theme", () => {
    const { result } = renderHook(() => useThemeToggler(false));

    act(() => {
      result.current.handleThemeToggle();
    });

    expect(result.current.darkThemeEnabled).toBe(true);
  });
});
