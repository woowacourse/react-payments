import React from 'react';

import useCardState from '../../../hooks/useCardState';

import Input from '../../../components/Input';

const CardExpirationInput = ({ placeholder, value, onChange }) => {
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  return (
    <Input
      type='text'
      width='48%'
      maxLength='2'
      placeholder={placeholder}
      color={cardCompanyColor}
      value={value}
      onChange={onChange}
    />
  );
};

export default CardExpirationInput;
