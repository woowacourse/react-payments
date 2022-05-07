import React from 'react';
import styled from 'styled-components';
import { LABEL_PRIMARY_COLOR } from '../../theme';

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
  margin: 0 auto;
  padding: 8px 0;
  color: ${LABEL_PRIMARY_COLOR};
`;

const S = {
  CompanyContainer,
  CompanyColorCircle,
  CompanyName,
};

function CardCompany({ color, name, handleClick }) {
  return (
    <S.CompanyContainer onClick={handleClick}>
      <S.CompanyColorCircle hexColor={color}></S.CompanyColorCircle>
      <S.CompanyName>{name}</S.CompanyName>
    </S.CompanyContainer>
  );
}

export default CardCompany;
