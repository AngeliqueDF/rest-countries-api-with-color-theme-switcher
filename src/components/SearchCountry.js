import React from "react";

const SearchCountry = ({ search, handleSearch }) => {
	const handleChange = (e) => {
		e.preventDefault();
		handleSearch(e.target.value);
	};

	return (
		<input
			className="search-input"
			type="search"
			placeholder="Search for a country..."
			value={search}
			onChange={handleChange}
		/>
	);
};

export default SearchCountry;
