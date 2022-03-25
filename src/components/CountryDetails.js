import countriesService from "./../services/countries";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import helpers from "./../utils/helpers";

import GoBackButton from "./GoBackButton";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CountryDetails = ({ countries }) => {
	// Getting the current country code from the URL.
	const { cca3 } = useParams();

	// Initiliazing countriesList with countries. We might lose that value if the browser is refreshed.
	const [countriesList, setCountriesList] = useState(countries);
	const [country, setCountry] = useState(null);

	useEffect(async () => {
		try {
			// If we lost the countries values, we request them from the API.
			if (countries.length === 0) {
				const response = await countriesService.getAll();
				setCountriesList(response.data);
			}
			// Finding the current country using the URL parameter :cca3.
			const foundCountry = countriesList.find(
				(storedCountry) => storedCountry.cca3 === cca3
			);
			setCountry(foundCountry);
		} catch (error) {
			console.log(error);
		}
	}, [cca3, country]);

	// The component might not be ready to display information at first because it's relying the network. In this case we display a loading status.
	if (!country) {
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
		<div>
			<GoBackButton />

			<Row>
				<Col>
					<Image
						src={country.flags.svg}
						fluid="true"
						alt={`Flag of ${country.name.common}`}
					/>
				</Col>

				<Col>
					<h2>{country.name.common}</h2>
					<Col>
						<ListGroup.Item>Native name: {nativeName}</ListGroup.Item>
						<ListGroup.Item>
							Population: {helpers.formatNumber(country.population)}
						</ListGroup.Item>
						<ListGroup.Item>Region: {country.region}</ListGroup.Item>
						<ListGroup.Item>Subregion: {country.subregion}</ListGroup.Item>
						<ListGroup.Item>Capital: {country.capital}</ListGroup.Item>
					</Col>

					<Col>
						<ListGroup.Item>Top level domain: {country.tld}</ListGroup.Item>
						<ListGroup.Item>
							<ListGroup horizontal>
								Currencies:{" "}
								{displayCurrencies.map((currency, index) => (
									<ListGroup.Item key={currency.name}>
										{helpers.listPunctuation(
											displayCurrencies,
											currency.name,
											index
										)}
									</ListGroup.Item>
								))}
							</ListGroup>
						</ListGroup.Item>
						<ListGroup.Item>
							<ListGroup horizontal>
								Languages:
								{displayLanguages.map((language, index) => (
									<ListGroup.Item key={language}>
										{helpers.listPunctuation(displayLanguages, language, index)}
									</ListGroup.Item>
								))}
							</ListGroup>
						</ListGroup.Item>
					</Col>
					<Row>
						{country.borders ? (
							<ListGroup.Item>
								<ListGroup horizontal>
									Borders:
									{borderCountries.map((border, index) => (
										<ListGroup.Item key={border[0].cca3}>
											<Link to={`/countries/${border[0].cca3}`}>
												{helpers.listPunctuation(
													borderCountries,
													border[0].name.common,
													index
												)}
											</Link>
										</ListGroup.Item>
									))}
								</ListGroup>
							</ListGroup.Item>
						) : null}
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CountryDetails;
