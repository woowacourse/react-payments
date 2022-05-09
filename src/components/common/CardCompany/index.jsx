import React from 'react';

import { CompanyColorCircle, CompanyContainer, CompanyName } from './style';

function CardCompany({ hexColor, name, handleClick }) {
  return (
    <CompanyContainer onClick={handleClick} data-testid="card-company">
      <CompanyColorCircle hexColor={hexColor}></CompanyColorCircle>
      <CompanyName>{name}</CompanyName>
    </CompanyContainer>
  );
}

export default CardCompany;
