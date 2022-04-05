import React from "react";
import helpers from "./../utils/helpers";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CountryInfoRow from "./../components/CountryInfoRow";

const CountryCard = ({ country }) => {
  const countryCardInfo = [
    { term: "Population", value: helpers.formatNumber(country.population) },
    { term: "Region", value: country.region },
    { term: "Capital", value: country.capital },
  ];
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
            <dl>
              {countryCardInfo.map((info) => (
                <CountryInfoRow
                  key={info.term + info.value}
                  term={info.term}
                  values={info.value}
                />
              ))}
            </dl>
          </Card.Body>
        </Card>
      </Link>
    </li>
  );
};

export default CountryCard;
