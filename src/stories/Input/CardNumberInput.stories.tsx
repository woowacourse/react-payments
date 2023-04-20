import type { Meta, StoryObj } from '@storybook/react';

import { CardNumberInput } from '../../components/input/CardNumberInput';
import { useState } from 'react';

const meta = {
  title: 'Example/Input',
  component: CardNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

export const CardNumber = () => {
  const [cardNumber, setCardNumber] = useState({ 0: '', 1: '', 2: '', 3: '' });

  return (
    <CardNumberInput
      moveFocusToExpirationDate={() => {}}
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
    />
  );
};
