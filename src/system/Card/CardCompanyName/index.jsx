import React from 'react';

import CardCompanyNameStyled from './style';

const CardCompanyName = ({ size, children }) => {
  return <CardCompanyNameStyled size={size}>{children}</CardCompanyNameStyled>;
};

export default CardCompanyName;
