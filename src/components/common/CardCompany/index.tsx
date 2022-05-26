import React from "react";

import { CompanyColorCircle, CompanyContainer, CompanyName } from "./styled";

interface CardCompanyProps {
  hexColor: string;
  name: string;
  handleClick: () => void;
}

function CardCompany({ hexColor, name, handleClick }: CardCompanyProps) {
  return (
    <CompanyContainer onClick={handleClick} data-testid="card-company">
      <CompanyColorCircle hexColor={hexColor}></CompanyColorCircle>
      <CompanyName>{name}</CompanyName>
    </CompanyContainer>
  );
}

export default CardCompany;
