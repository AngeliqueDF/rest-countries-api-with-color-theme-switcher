import countriesService from "./services/countries";
import "./css/App.scss";
import { useState, useEffect } from "react";
import useThemeToggler from "./utils/hooks/useThemeToggler";
import { Routes, Route, useSearchParams } from "react-router-dom";

import Header from "./components/Header/Header";
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

  // /**
  //  * Dark theme
  //  */
  const { darkThemeEnabled, applyTheme, handleThemeToggle } = useThemeToggler();
  useEffect(() => {
    applyTheme();
  }, [darkThemeEnabled]);

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
