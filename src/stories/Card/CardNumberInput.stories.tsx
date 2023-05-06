import type { Meta, StoryFn } from '@storybook/react';
import { CardNumberInput } from 'components/Input';
import { useRef, useState } from 'react';

const meta = {
  title: 'Payments/Card/CardNumberInput',
  component: CardNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryFn<typeof meta>;

export const CardNumber: Story = () => {
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
