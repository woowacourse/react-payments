import type { Meta } from '@storybook/react';
import CardNumber from '../../components/CardAddForm/CardNumber/CardNumber';
import { useState } from 'react';

const meta = {
  title: 'Payments/Cards/CardNumberInput',
  component: CardNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

export const Default = () => {
  const [cardNumber, setCardNumber] = useState('');

  return (
    <CardNumber
      onInputChange={(event) => {
        setCardNumber(event.target.value);
      }}
      value={cardNumber}
      isValid={true}
    ></CardNumber>
  );
};
