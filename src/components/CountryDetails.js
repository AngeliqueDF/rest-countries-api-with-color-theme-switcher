import countriesService from "./../services/countries";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import helpers from "./../utils/helpers";

import GoBackButton from "./GoBackButton";
import Image from "react-bootstrap/Image";
import CountryInfoRow from "./CountryInfoRow";

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
  }, [cca3, country, countriesList, countries.length]);

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

  const mainCountryInfo = [
    { term: "Native name", value: nativeName },
    { term: "Population", value: helpers.formatNumber(country.population) },
    { term: "Region", value: country.region },
    { term: "Sub region", value: country.subregion },
    { term: "Capital", value: country.capital },
  ];
  return (
    <>
      <div className="country-details-container">
        <GoBackButton />

        <div className="country-details">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="country-flag"
          />

          <div>
            <h2 className="country-name">{country.name.common}</h2>

            {/* Displays the first group of the country's information, on the left */}
            <div className="country-info">
              <dl className="details-col-one">
                {mainCountryInfo.map((info) => (
                  <CountryInfoRow
                    key={info.term}
                    term={info.term}
                    values={info.value}
                  />
                ))}
              </dl>

              {/* Displays the second group of the country's information, on the right */}
              <div className="details-col-two">
                <dl>
                  <CountryInfoRow
                    term="Top level domain"
                    values={country.tld}
                  />
                  <CountryInfoRow
                    term="Currencies"
                    values={displayCurrencies}
                  />
                  <CountryInfoRow term="Languages" values={displayLanguages} />
                </dl>
              </div>
            </div>

            {/* Displaying the list of bordering countries if the current country has any */}
            {country.borders ? (
              <section className="d-flex border-countries">
                <h3 className="border-countries-title capitalize">
                  Border countries:
                </h3>

                <ul className="borders-list d-flex">
                  {borderCountries.map((border) => (
                    <li className="border-country" key={border[0].cca3}>
                      <Link
                        className="border-country-link"
                        to={`/countries/${border[0].cca3}`}
                      >
                        {border[0].name.common}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
