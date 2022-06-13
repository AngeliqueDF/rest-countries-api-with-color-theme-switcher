import React from "react";
import helpers from "./../utils/helpers";

const CountryInfoRow = ({ term, values }) => {
  const DisplayValueTemplate = ({ value }) => (
    <dd style={{ marginRight: "4px" }} key={value}>
      {value}
    </dd>
  );

  // Checks whether the value is an array, formats the values and displays them
  const DisplayValue = ({ value }) => {
    if (Array.isArray(value)) {
      // Currencies are sent as an array of objects
      if (term === "Currencies") {
        return values.map((value, i) => (
          <DisplayValueTemplate
            key={value.name}
            value={helpers.listPunctuation(values, value.name, i)}
          />
        ));
      } else {
        return value.map((v, i) => (
          <DisplayValueTemplate
            key={v}
            value={helpers.listPunctuation(value, v, i)}
          />
        ));
      }
    }
    return <DisplayValueTemplate value={value} />;
  };

  return (
    <div className="d-flex flex-wrap country-info-row">
      <dt className="capitalize bold">{term}:&nbsp;</dt>
      <DisplayValue value={values} />
    </div>
  );
};

export default CountryInfoRow;
