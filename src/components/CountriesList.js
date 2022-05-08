import React from "react";

import CountryCard from "./CountryCard";

import styled from "styled-components";

const StyledCountriesList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    .country-card {
      flex-basis: 16.3rem;
      margin: 0 0 4rem;
      .card-body {
        padding: 0 1.5rem 2rem 1.5rem;
      }
    }
  }
`;

const CountriesList = ({ countries, search, regionFilter }) => {
  let countriesDisplayed = countries;

  if (countriesDisplayed.length === 0) {
    return <div>loading</div>;
  }

  if (search !== "") {
    const searchedCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    countriesDisplayed = searchedCountries;
  }

  if (regionFilter !== "") {
    const regionCountries = countriesDisplayed.filter(
      (country) => country.region === regionFilter
    );

    countriesDisplayed = regionCountries;
  }

  return (
    <StyledCountriesList className="countries-list">
      {countriesDisplayed.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </StyledCountriesList>
  );
};

export default CountriesList;
