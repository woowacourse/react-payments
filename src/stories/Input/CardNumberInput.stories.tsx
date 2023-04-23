import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { CardNumberInput } from '../../components/input/CardNumberInput';

const meta = {
  title: 'Example/Input',
  component: CardNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

export const CardNumber = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  return (
    <CardNumberInput
      moveFocusToExpirationDate={() => {}}
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
    />
  );
};
