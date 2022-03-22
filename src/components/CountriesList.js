import React from "react";

import CountryCard from "./CountryCard";

const CountriesList = ({ countries, search }) => {
	let countriesDisplayed = countries;

	if (search !== "") {
		const searchedCountries = countries.filter((country) =>
			country.name.common.toLowerCase().includes(search.toLowerCase())
		);

		countriesDisplayed = searchedCountries;
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
