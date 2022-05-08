import React from 'react';

import CardWrapperStyled from './style';
import CardCompanyName from './CardCompanyName';
import CardChip from './CardChip';
import CardNumber from './CardNumber';
import CardRestInfo from './CardRestInfo';

const Card = ({ size, onClick, children }) => {
  const [cardCompanyName, cardNumber, cardOwner, cardExpiration, cardCompanyColor] = children;

  return (
    <CardWrapperStyled size={size} color={cardCompanyColor} onClick={onClick} >
      <CardCompanyName size={size}>{cardCompanyName}</CardCompanyName>
      <CardChip size={size} />
      <CardNumber size={size}>{cardNumber}</CardNumber>
      <CardRestInfo size={size}>{{ cardOwner, cardExpiration }}</CardRestInfo>
    </CardWrapperStyled>
  );
};

export default Card;
