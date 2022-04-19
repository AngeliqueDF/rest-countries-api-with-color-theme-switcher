import countriesService from "./services/countries";
import "./css/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  /**
   * Countries: the full list of countries
   */

  const [countries, setCountries] = useState([]);

  // getting countries and their information from the API
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await countriesService.getAll();
        setCountries(response.data);
      } catch (error) {
        console.log("Error: can't get the countries data.", error);
      }
    }
    fetchCountries();
  }, []);

  /**
   * Dark theme
   */

  // darkThemeEnabled stores the current system color scheme (true: dark, false: light)
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  // Select the root element to toggle theme
  const rootElement = document.querySelector(":root");

  // At first, the app's default will be the current system color scheme (light or dark)
  useEffect(() => {
    if (darkThemeEnabled) {
      rootElement.classList.add("dark-theme");
    }
  });

  // Checks whether the dark theme was enabled during a previous visit. If so, adds the class "dark-theme" to the root element.
  useEffect(() => {
    const hasEnabledDarkTheme = JSON.parse(
      window.localStorage.getItem("darkThemeEnabled")
    );
    if (hasEnabledDarkTheme === true) {
      rootElement.classList.add("dark-theme");
    } else if (hasEnabledDarkTheme === false) {
      // Otherwise, check whether the user has defined the light color scheme as their preference.
      // hasEnabledDarkTheme is checked for strict equality since if the local storage was empty, it would be null
      rootElement.classList.remove("dark-theme");
    }
  });

  // The click handler for the theme toggle button
  // It only changes the state, useEffect hook is responsible for toggling the CSS class
  const handleThemeToggle = () => {
    // Toggle the current boolean
    setDarkThemeEnabled(!darkThemeEnabled);
    // Store the new value in the local storage
    window.localStorage.setItem("darkThemeEnabled", !darkThemeEnabled);
  };

  /**
   * Search state
   */

  // using the URL parameters to track search and region filters
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    region: "",
  });

  /**
   * Changes the search= url parameter to the value entered in the search field.
   * @param {Object} search
   */
  const handleSearch = (search) => {
    searchParams.set("search", search);
    setSearchParams(searchParams);
  };

  /**
   * 	Changes the region url parameter to the value selected in the dropdown.
   * @param {Object} region
   */
  const handleRegionFilter = (region) => {
    searchParams.set("region", region);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Header
        darkThemeEnabled={darkThemeEnabled}
        toggleTheme={handleThemeToggle}
      />

      <>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countries={countries}
                search={searchParams.get("search")}
                region={searchParams.get("region")}
                handleSearch={handleSearch}
                handleRegionFilter={handleRegionFilter}
              />
            }
          />
          <Route
            path="/countries/:cca3"
            element={
              <CountryDetails
                countries={countries}
                setCountries={setCountries}
              />
            }
          />
        </Routes>
      </>
    </>
  );
}

export default App;
