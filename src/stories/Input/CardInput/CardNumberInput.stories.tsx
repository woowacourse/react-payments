import type { Meta } from '@storybook/react';
import { useRef, useState } from 'react';
import { CardNumberInput } from '../../../components/input/CardNumberInput';

const meta = {
  title: 'Example/Input/CardInput',
  component: CardNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

export const CardNumber = () => {
  const cardNumberInputRef = useRef(null);
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  return (
    <CardNumberInput
      cardNumberInputRef={cardNumberInputRef}
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
    />
  );
};
