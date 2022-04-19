import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import styled from "styled-components";

const StyledWrapper = styled.div`
  .filters {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-inline: var(--horizontal-spacing);
    margin-block-end: 1.4rem;
  }
  .region-toggle,
  .region-menu {
    font-size: 0.8rem;
    text-align: left;
    color: var(--text);
    background-color: var(--elements);
    border: none;
    width: 12.4rem;
  }

  .region-menu {
    box-shadow: var(--light-shadow);
  }

  .region-toggle {
    padding: 0.8rem 1.4rem;
    &::after {
      margin-inline-start: 4rem;
    }
  }

  .region-item {
    padding: 0.1rem 1.4rem;
  }

  @media screen and (min-width: 1440px) {
    & {
      flex-basis: 10%;
    }
  }
`;

const RegionFilter = ({ region, handleRegionFilter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleOnchange = (e) => {
    const { textContent: regionSelected } = e.target;
    handleRegionFilter(regionSelected);
    if (region === regionSelected) {
      handleRegionFilter("");
    }
  };
  return (
    <StyledWrapper>
      <Dropdown>
        <Dropdown.Toggle className="region-toggle">
          Filter by <span className="uppercase">r</span>egion
        </Dropdown.Toggle>

        <Dropdown.Menu className="region-menu">
          {regions.map((regionOption) => (
            <Dropdown.Item
              className="region-item"
              active={regionOption === region ? true : false}
              onClick={handleOnchange}
              key={regionOption}
              eventKey={regionOption}
            >
              {regionOption}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </StyledWrapper>
  );
};

export default RegionFilter;
