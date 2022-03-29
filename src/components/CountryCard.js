import React from "react";
import helpers from "./../utils/helpers";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CountryCard = ({ country }) => {
	return (
		<li className="country-card">
			<Link to={`countries/${country.cca3}`}>
				<Card as="article">
					<Card.Img
						variant="top"
						src={country.flags.png}
						fluid="true"
						alt={`Flag of ${country.name.common}`}
						preserveAspectRatio="none"
					/>
					<Card.Title as="h2">{country.name.common}</Card.Title>
					<Card.Body>
						<ListGroup as="ul">
							<ListGroup.Item as="li">
								<span className="bold">Population:</span>{" "}
								{helpers.formatNumber(country.population)}
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<span className="bold">Region:</span> {country.region}
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<span className="bold">Capital:</span> {country.capital}
							</ListGroup.Item>
						</ListGroup>
					</Card.Body>
				</Card>
			</Link>
		</li>
	);
};

export default CountryCard;
