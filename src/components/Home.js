import React from "react";

import SearchCountry from "./SearchCountry";
import RegionFilter from "./RegionFilter";
import CountriesList from "./CountriesList";

const Home = ({
	countries,
	search,
	handleSearch,
}) => {
	return (
		<>
			<div>
				<SearchCountry search={search} handleSearch={handleSearch} />
			</div>
			<CountriesList
				countries={countries}
				search={search}
			/>
		</>
	);
};

export default Home;
