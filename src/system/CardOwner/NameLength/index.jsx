import React from 'react';

import NameLengthStyled from './style';

const NameLength = ({ children }) => {
  const nameLengthColor = () => (children.length > 30 ? '#E24141' : '#525252');

  return (
    <NameLengthStyled color={nameLengthColor()}>
      <span>{children.length}</span>/<span>30</span>
    </NameLengthStyled>
  );
};

export default NameLength;
