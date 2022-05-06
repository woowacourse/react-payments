import React, { forwardRef } from 'react';

import InputStyled from './style';

const Input = (props, ref) => {
  return <InputStyled {...props} ref={ref} />;
};

export default forwardRef(Input);
