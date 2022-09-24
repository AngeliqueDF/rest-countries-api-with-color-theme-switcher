import React from "react";

import SearchCountry from "./SearchCountry/SearchCountry";
import RegionFilter from "./RegionFilter";
import CountriesList from "./CountriesList";

import styled from "styled-components";

const StyledHome = styled.main`
  .filters {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-inline: var(--horizontal-spacing);
    margin-block-end: 1.4rem;
  }
  @media screen and (min-width: 1440px) {
    .filters {
      flex-direction: row;
      justify-content: space-between;
      margin: 0 0 1.4rem;
    }
  }
`;

const Home = ({
  countries,
  search,
  region,
  handleSearch,
  handleRegionFilter,
}) => {
  return (
    <StyledHome>
      <div className="container">
        <div className="filters">
          <SearchCountry search={search} handleSearch={handleSearch} />
          <RegionFilter
            region={region}
            handleRegionFilter={handleRegionFilter}
          />
        </div>
      </div>

      <div className="container">
        <CountriesList
          countries={countries}
          search={search}
          regionFilter={region}
        />
      </div>
    </StyledHome>
  );
};

export default Home;
