import React from "react";

import styled from "styled-components";

const StyledWrapper = styled.input`
  &::placeholder,
  & {
    color: var(--text);
    font-size: 0.8rem;
  }

  margin-block-end: 1.6rem;
  border: none;
  padding: 0.8rem 0.8rem 0.8rem 4.2rem;
  background-image: var(--icon-search);
  background-position: 1.4rem center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-color: var(--elements);
  border-radius: 0.25rem;

  @media screen and (min-width: 1440px) {
    flex-basis: 30%;
  }
`;

const SearchCountry = ({ search, handleSearch }) => {
  const handleChange = (e) => {
    e.preventDefault();
    handleSearch(e.target.value);
  };

  return (
    <StyledWrapper
      className="search-input"
      type="search"
      placeholder="Search for a country…"
      value={search}
      onChange={handleChange}
    />
  );
};

export default SearchCountry;
