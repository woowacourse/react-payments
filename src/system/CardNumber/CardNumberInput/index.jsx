import React from 'react';

import useCardState from '../../../hooks/useCardState';

import Input from '../../../components/Input';

const CardNumberInput = ({ type, value, onChange, onFocus }) => {
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  return (
    <Input
      width='20%'
      maxLength='4'
      type={type}
      color={cardCompanyColor}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default CardNumberInput;
