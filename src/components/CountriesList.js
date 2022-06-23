import React from "react";

import CountryCard from "./CountryCard";

import styled from "styled-components";

const StyledCountriesList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 3rem;
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
