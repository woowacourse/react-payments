import React from 'react';

import FlexStyled from './style';

const Flex = ({ width, children }) => {
  return <FlexStyled width={width}>{children}</FlexStyled>;
};

export default Flex;
