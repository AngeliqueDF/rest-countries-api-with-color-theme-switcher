import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const LeftArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <title>4-Arrow Left</title>
    <g id="_4-Arrow_Left" data-name="4-Arrow Left">
      <path d="M32,15H3.41l8.29-8.29L10.29,5.29l-10,10a1,1,0,0,0,0,1.41l10,10,1.41-1.41L3.41,17H32Z" />
    </g>
  </svg>
);

const StyledButton = styled.button`
  color: var(--text);
  width: 6rem;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--elements);
  margin: 1.5rem 0 4rem 0;
  padding: 0.4rem;
  -webkit-box-shadow: var(--back-btn-shadow);
  -moz-box-shadow: var(--back-btn-shadow);
  box-shadow: var(--back-btn-shadow);
`;

const GoBackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <StyledButton className="back-button" onClick={goBack}>
        <LeftArrowIcon />
        Back
      </StyledButton>
    </div>
  );
};

export default GoBackButton;
