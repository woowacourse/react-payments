import React from 'react';

import useCardState from '../../../hooks/useCardState'

import Input from '../../../components/Input';

const CardCvcInput = ({ value, onChange }) => {
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  return (
    <Input
      type='password'
      maxLength='3'
      color={cardCompanyColor}
      value={value}
      onChange={onChange}
    />
  );
};

export default CardCvcInput;
