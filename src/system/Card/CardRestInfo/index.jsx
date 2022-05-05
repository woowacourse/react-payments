import React from 'react';

import CardRestInfoStyled from './style';
import TextEllipsis from '../../../components/TextEllipsis';
import SpanText from '../../../components/SpanText';

const CardRestInfo = ({ children }) => {
  const { cardOwner, cardExpiration } = children;

  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  return (
    <CardRestInfoStyled>
      <TextEllipsis>{cardOwner}</TextEllipsis>
      <SpanText>{cardExpirationContent()}</SpanText>
    </CardRestInfoStyled>
  );
};

export default CardRestInfo;
