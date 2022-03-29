import countriesService from "./../services/countries";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import helpers from "./../utils/helpers";

import GoBackButton from "./GoBackButton";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CountryDetails = ({ countries }) => {
	// Getting the current country code from the URL.
	const { cca3 } = useParams();

	// Initiliazing countriesList with countries. We might lose that value if the browser is refreshed.
	const [countriesList, setCountriesList] = useState(countries);
	const [country, setCountry] = useState(null);

	useEffect(() => {
		try {
			// If we lost the countries values, we request them from the API.
			async function fetchCountries() {
				if (countries.length === 0) {
					const response = await countriesService.getAll();
					setCountriesList(response.data);
				}
			}
			fetchCountries();
			// Then find the current country using the URL parameter :cca3.
			const foundCountry = countriesList.find(
				(storedCountry) => storedCountry.cca3 === cca3
			);
			setCountry(foundCountry);
		} catch (error) {
			console.log(error);
		}
	}, [cca3, country, countriesList]);

	// The component might not be ready to display information at first because it's relying the network. In this case we display a loading status.
	if (countriesList.length === 0 || !country) {
		return <div>loading</div>;
	}

	let borderCountries = [];

	if (country.borders) {
		// Use the code of each country to find it in the API.
		borderCountries = country.borders.map((border) =>
			countriesList.filter((storedCountry) => storedCountry.cca3 === border)
		);
	}

	const displayCurrencies = helpers.mapObject(country.currencies);
	const displayLanguages = helpers.mapObject(country.languages);

	const findNativeName = (nativeNameObject) => {
		const nativeName = helpers.mapObject(nativeNameObject);
		return nativeName[nativeName.length - 1].common;
	};
	const nativeName = findNativeName(country.name.nativeName);
	return (
		<>
			<div className="country-details-container">
				<GoBackButton />

				<div className="country-details">
					<Col>
						<Image
							src={country.flags.svg}
							fluid="true"
							alt={`Flag of ${country.name.common}`}
						/>
					</Col>

					<Col>
						<h2 className="country-name">{country.name.common}</h2>

						<ListGroup as="ul" className="details-list">
							<ListGroup.Item as="li">
								<span className="bold">Native name:</span> {nativeName}
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<span className="bold">Population: </span>{" "}
								{helpers.formatNumber(country.population)}
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<span className="bold">Region: </span> {country.region}
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<span className="bold">Subregion: </span> {country.subregion}
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<span className="bold">Capital: </span> {country.capital}
							</ListGroup.Item>

							<ListGroup.Item as="li">
								<span className="bold">Top level domain: </span>
								{country.tld}
							</ListGroup.Item>
						</ListGroup>

						<ListGroup horizontal>
							<span className="bold">Currencies:&nbsp;</span>
							{displayCurrencies.map((currency, index) => (
								<ListGroup.Item as="li" key={currency.name}>
									{helpers.listPunctuation(
										displayCurrencies,
										currency.name,
										index
									)}
								</ListGroup.Item>
							))}
						</ListGroup>

						<ListGroup horizontal>
							<span className="bold">Languages:&nbsp;</span>
							{displayLanguages.map((language, index) => (
								<ListGroup.Item as="li" key={language}>
									{helpers.listPunctuation(displayLanguages, language, index)}
								</ListGroup.Item>
							))}
						</ListGroup>

						{/* Displaying the list of bordering countries if the current country has any */}
						{country.borders ? (
							<ListGroup as="ul" className="borders-list-container">
								<div className="d-flex flex-column">
									<div>
										<h3 className="border-countries-title capitalize">
											Border countries:{" "}
										</h3>{" "}
									</div>
									<div className="d-flex flex-wrap borders-list justify-content-start">
										{borderCountries.map((border) => (
											<ListGroup.Item
												className="border-country"
												as="li"
												key={border[0].cca3}
											>
												<Link
													className="border-country-link"
													to={`/countries/${border[0].cca3}`}
												>
													{border[0].name.common}
												</Link>
											</ListGroup.Item>
										))}
									</div>
								</div>
							</ListGroup>
						) : null}
					</Col>
				</div>
			</div>
		</>
	);
};

export default CountryDetails;
