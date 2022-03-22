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
			<div>
				<SearchCountry search={search} handleSearch={handleSearch} />
				<RegionFilter region={region} handleRegionFilter={handleRegionFilter} />
			</div>
			<CountriesList
				countries={countries}
				search={search}
				regionFilter={region}
			/>
		</>
	);
};

export default Home;
