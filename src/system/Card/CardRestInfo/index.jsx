import React from 'react';

import FlexSpaceBetween from '../../../components/FlexSpaceBetween';

import { CardOwnerStyled, CardExpirationStyled } from './style';

const CardRestInfo = ({ size, children }) => {
  const { cardOwner, cardExpiration } = children;

  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  return (
    <FlexSpaceBetween>
      <CardOwnerStyled size={size}>{cardOwner}</CardOwnerStyled>
      <CardExpirationStyled size={size}>{cardExpirationContent()}</CardExpirationStyled>
    </FlexSpaceBetween>
  );
};

export default CardRestInfo;
