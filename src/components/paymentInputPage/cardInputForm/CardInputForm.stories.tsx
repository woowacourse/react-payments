import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardInputForm from './CardInputForm';
import { ExpirationDateType } from '../PaymentInputPage';

const meta = {
  title: 'CardInputForm',
  component: CardInputForm,
  args: {
    cardNumbers: [],
    expirationDate: { month: '', year: '' },
    setCardNumbers: () => {},
    setExpirationDate: () => {},
  },
} satisfies Meta<typeof CardInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [cardNumbers, setCardNumbers] = useState<string[]>([]);
    const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
      month: '',
      year: '',
    });

    return (
      <CardInputForm
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        setCardNumbers={setCardNumbers}
        setExpirationDate={setExpirationDate}
      />
    );
  },
};
