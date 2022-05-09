import React from 'react';

import { CardNumberStyled, NumberStyled } from './style';

const CardNumber = ({ size, children }) => {
  if (!children) return null;

  return (
    <CardNumberStyled size={size}>
      <NumberStyled size={size}>{children[0]}</NumberStyled>
      <NumberStyled size={size}>{children[1]}</NumberStyled>
      <NumberStyled size={size}>{'•'.repeat(children[2].length)}</NumberStyled>
      <NumberStyled size={size}>{'•'.repeat(children[3].length)}</NumberStyled>
    </CardNumberStyled>
  );
};

export default CardNumber;
