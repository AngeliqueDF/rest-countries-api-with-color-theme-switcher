import helpers from "../../../utils/helpers";

import DisplayValueTemplate from "./DisplayValueTemplate";

// Checks whether the value is an array, formats the values and displays them
const DisplayValue = ({ values, term }) => {
  if (Array.isArray(values)) {
    // Currencies are sent as an array of objects
    if (term === "Currencies") {
      return values.map((value, i) => (
        <DisplayValueTemplate
          key={value.name}
          value={helpers.listPunctuation(values, value.name, i)}
        />
      ));
    } else {
      return values.map((v, i) => (
        <DisplayValueTemplate
          key={v}
          value={helpers.listPunctuation(values, v, i)}
        />
      ));
    }
  }
  return <DisplayValueTemplate value={values} />;
};

export default DisplayValue;
