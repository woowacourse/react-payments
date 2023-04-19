import type { Dispatch } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './common/Input';

const StyledCardNumberInput = styled.div`
  display: flex;
  gap: 8px;

  & > * {
    flex: 1;
  }
`;

export const CardNumberInput = () => {
  const [cardNumber1, setCardNumber1] = useState('');
  const [cardNumber2, setCardNumber2] = useState('');
  const [cardNumber3, setCardNumber3] = useState('');
  const [cardNumber4, setCardNumber4] = useState('');

  const handleCardNumberChange = (dispatch: Dispatch<string>) => (value: string) => {
    if (!/^\d{0,4}$/.test(value)) return;

    dispatch(value);
  };

  return (
    <StyledCardNumberInput>
      <Input value={cardNumber1} onChange={handleCardNumberChange(setCardNumber1)} center />
      <Input value={cardNumber2} onChange={handleCardNumberChange(setCardNumber2)} center />
      <Input
        value={cardNumber3}
        onChange={handleCardNumberChange(setCardNumber3)}
        center
        type="password"
      />
      <Input
        value={cardNumber4}
        onChange={handleCardNumberChange(setCardNumber4)}
        center
        type="password"
      />
    </StyledCardNumberInput>
  );
};
