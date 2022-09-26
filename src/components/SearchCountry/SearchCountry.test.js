import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SearchCountry from "./SearchCountry";

describe("Renders an input to search for a country", () => {
  test("Displays the placeholder text", () => {
    render(<SearchCountry />);

    const input = screen.getByRole("searchbox");

    expect(input).toBeDefined();
    expect(input.placeholder).toBe("Search for a country…");
  });
});
