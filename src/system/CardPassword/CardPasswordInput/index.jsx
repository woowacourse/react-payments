import React, { forwardRef } from 'react';

import useCardState from '../../../hooks/useCardState';

import Input from '../../../components/Input';

const CardPasswordInput = ({ value, onChange }, ref) => {
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  return (
    <Input
      type='password'
      width='43px'
      maxLength='1'
      color={cardCompanyColor}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
};

export default forwardRef(CardPasswordInput);
