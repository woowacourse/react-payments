import React from 'react';

import useCardState from '../../../hooks/useCardState';

import HyphenStyled from './style';

const Hyphen = () => {
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  return <HyphenStyled color={cardCompanyColor}>-</HyphenStyled>;
};

export default Hyphen;
