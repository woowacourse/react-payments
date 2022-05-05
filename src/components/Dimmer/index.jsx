import React from 'react';

import DimmerStyled from './style';

const Dimmer = ({ onClick, show }) => {
  return <DimmerStyled onClick={onClick} show={show}></DimmerStyled>;
};

export default Dimmer;
