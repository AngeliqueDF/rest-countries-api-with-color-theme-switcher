import styled from "styled-components";

const StyledCountryDetails = styled.main`
  .country-details-container {
    // defined in the style guide
    font-size: 16px;
    width: 87.5%;
    margin: 0 auto;
  }

  .country-details {
    padding-block-end: 3rem;
    .country-flag {
      max-width: 100%;
    }
    & > * {
      background-color: transparent;
    }
    .country-name {
      margin-block-start: 3rem;
      font-weight: 800;
    }

    .border-countries {
      flex-direction: column;
    }

    .details-col-one,
    .details-col-two,
    .country-name,
    .country-capital,
    .border-countries-title {
      margin-block-end: 1.5rem;
    }
    .languages li,
    .currencies li {
      color: var(--text);
      margin-right: 4px;
    }
    .borders-list {
      width: 100%;
      flex-wrap: wrap;
      flex-direction: row;
    }
    .border-countries-title {
      font-size: 1rem;
      font-weight: 600;
      min-width: fit-content;
    }
    .border-country {
      margin: 0 0.5rem 1rem 0;
      border-radius: 5px;
    }
    .border-country-link {
      background-color: var(--elements);
      box-shadow: var(--medium-shadow);
      padding: 0.35rem 1rem;
      border-radius: 2px;
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 1440px) {
    .country-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      .border-countries {
        align-items: center;
        flex-direction: row;
      }
      h3.border-countries-title {
        margin: 0.25rem 0.7rem auto auto;
      }
      .country-flag {
        width: 45%;
      }
      & > div {
        width: 49%;
      }
      .country-info-row {
        margin-bottom: 0.75rem;
      }
      .country-info {
        display: flex;
        justify-content: space-between;
        .details-col-one,
        .details-col-two {
          width: 49%;
        }
        dl dd {
          margin-bottom: 0 !important;
        }
      }
      .currencies,
      .languages {
        width: 100%;
        flex-wrap: wrap;
      }
      .borders-list {
        margin: 0;
      }
    }
  }
`;

export default StyledCountryDetails;
