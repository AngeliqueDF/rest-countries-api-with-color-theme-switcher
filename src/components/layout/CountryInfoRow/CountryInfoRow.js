import React from "react";

import DisplayValue from "./DisplayValue";

const CountryInfoRow = ({ term, values }) => {
  return (
    <div className="d-flex flex-wrap country-info-row">
      <dt className="capitalize bold">{term}:&nbsp;</dt>
      <DisplayValue term={term} values={values} />
    </div>
  );
};

export default CountryInfoRow;
