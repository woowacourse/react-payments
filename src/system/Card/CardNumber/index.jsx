import React from 'react';

import { CardNumberStyled, NumberStyled } from './style';

const CardNumber = ({ children }) => {
  if (!children) return null;

  return (
    <CardNumberStyled>
      <NumberStyled>{children[0]}</NumberStyled>
      <NumberStyled>{children[1]}</NumberStyled>
      <NumberStyled>{'•'.repeat(children[2].length)}</NumberStyled>
      <NumberStyled>{'•'.repeat(children[3].length)}</NumberStyled>
    </CardNumberStyled>
  );
};

export default CardNumber;
