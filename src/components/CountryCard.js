import React from "react";
import helpers from "./../utils/helpers";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CountryInfoRow from "./../components/CountryInfoRow";

import styled from "styled-components";

const StyledCountryCard = styled.li`
  width: 18rem;
  flex-basis: 16.3%;
  flex-basis: 23%;
  margin-block-end: 4rem;
  img {
    height: 10rem;
    box-shadow: var(--light-shadow);
    border-radius: 7px 7px 0 0;
  }
  .card {
    border-radius: 7px;
    border: none;
    background-color: var(--elements);
  }
  .card-title {
    padding: 1rem 1rem 1rem 1.5rem;
    font-size: 1.1rem;
    margin: 1rem 0 0;
    font-weight: bold;
  }

  .card-body {
    padding: 0 1.5rem 2rem 1.5rem;
  }
  .card-body {
    padding: 0 1.5rem 3.25rem 1.5rem;
    li {
      margin: 0.1rem 0;
    }
  }
`;

const CountryCard = ({ country }) => {
  const countryCardInfo = [
    { term: "Population", value: helpers.formatNumber(country.population) },
    { term: "Region", value: country.region },
    { term: "Capital", value: country.capital },
  ];
  return (
    <StyledCountryCard className="country-card">
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
    </StyledCountryCard>
  );
};

export default CountryCard;
