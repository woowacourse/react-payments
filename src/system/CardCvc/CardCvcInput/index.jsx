import React, { forwardRef } from 'react';

import useCardState from '../../../hooks/useCardState'

import Input from '../../../components/Input';

const CardCvcInput = ({ value, onChange }, ref) => {
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  return (
    <Input
      type='password'
      maxLength='3'
      color={cardCompanyColor}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
};

export default forwardRef(CardCvcInput);
