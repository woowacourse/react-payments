import React from 'react';

import CardWrapperStyled from './style';
import CardCompanyName from './CardCompanyName';
import CardChip from './CardChip';
import CardNumber from './CardNumber';
import CardRestInfo from './CardRestInfo';

const Card = ({ children, onClick, color }) => {
  const [cardCompanyName, cardNumber, cardOwner, cardExpiration] = children;

  return (
    <CardWrapperStyled onClick={onClick} color={color}>
      <CardCompanyName>{cardCompanyName}</CardCompanyName>
      <CardChip />
      <CardNumber>{cardNumber}</CardNumber>
      <CardRestInfo>{{ cardOwner, cardExpiration }}</CardRestInfo>
    </CardWrapperStyled>
  );
};

export default Card;
