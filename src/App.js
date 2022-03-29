import countriesService from "./services/countries";
import "./css/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
	const [countries, setCountries] = useState([]);
	// console.log(countries);

	// using the URL parameters to track search and region filters
	const [searchParams, setSearchParams] = useSearchParams({
		search: "",
		region: "",
	});

	// getting countries and their information from the API
	useEffect(() => {
		try {
			async function fetchCountries() {
				const response = await countriesService.getAll();
				setCountries(response.data);
			}
			fetchCountries();
		} catch (error) {
			console.log(error);
		}
	}, []);

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
			<Header />

			<main>
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
			</main>
		</>
	);
}

export default App;
