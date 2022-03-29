import React from "react";

import CountryCard from "./CountryCard";

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
		<>
			<ul>
				{countriesDisplayed.map((country) => (
					<CountryCard key={country.cca3} country={country} />
				))}
			</ul>
		</>
	);
};

export default CountriesList;
