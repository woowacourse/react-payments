import React from 'react';
import styled from 'styled-components';
import { LABEL_PRIMARY_COLOR } from '../../style';

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const CompanyColorCircle = styled.div`
  background-color: ${props => props.hexColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: ${props => `${props.hexColor}cc`};
  }
`;
const CompanyName = styled.p`
  margin: 0;
  padding: 8px;
  color: ${LABEL_PRIMARY_COLOR};
`;

function CardCompany({ hexColor, name, handleClick }) {
  return (
    <CompanyContainer onClick={handleClick}>
      <CompanyColorCircle hexColor={hexColor}></CompanyColorCircle>
      <CompanyName>{name}</CompanyName>
    </CompanyContainer>
  );
}

export default CardCompany;
