import React from 'react';

import { CardRestWrapperStyled, CardOwnerStyled, CardExpirationStyled } from './style';

const CardRestInfo = ({ size, children }) => {
  const { cardOwner, cardExpiration } = children;

  if (!cardExpiration) return null;

  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  return (
    <CardRestWrapperStyled>
      <CardOwnerStyled size={size}>{cardOwner}</CardOwnerStyled>
      <CardExpirationStyled size={size}>{cardExpirationContent()}</CardExpirationStyled>
    </CardRestWrapperStyled>
  );
};

export default CardRestInfo;
