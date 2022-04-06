import React from "react";

import SearchCountry from "./SearchCountry";
import RegionFilter from "./RegionFilter";
import CountriesList from "./CountriesList";

const Home = ({
  countries,
  search,
  region,
  handleSearch,
  handleRegionFilter,
}) => {
  return (
    <>
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
    </>
  );
};

export default Home;
