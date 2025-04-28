import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardNumberSection from './CardNumberSection';
import { CardNumber } from '../../types/card';

const meta: Meta<typeof CardNumberSection> = {
  title: 'CardNumberSection',
  component: CardNumberSection
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: { first: '', second: '', third: '', fourth: '' },
    cardNumberError: ''
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cardNumbers, setCardNumbers] = useState<CardNumber>(initialNumbers);
    const [cardNumberError, setCardNumberError] = useState('');

    const handleCardNumberChange = (key: keyof CardNumber, value: string) => {
      setCardNumbers((prev) => ({ ...prev, [key]: value }));
      setCardNumberError('');
    };

    return (
      <CardNumberSection
        cardNumbers={cardNumbers}
        handleCardNumberChange={handleCardNumberChange}
        cardNumberError={cardNumberError}
      />
    );
  }
};

export const Valid: Story = {
  args: {
    cardNumbers: { first: '1334', second: '2123', third: '4123', fourth: '2111' },
    cardNumberError: ''
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cardNumbers, setCardNumbers] = useState<CardNumber>(initialNumbers);
    const [cardNumberError, setCardNumberError] = useState('');

    const handleCardNumberChange = (key: keyof CardNumber, value: string) => {
      setCardNumbers((prev) => ({ ...prev, [key]: value }));
      setCardNumberError('');
    };

    return (
      <CardNumberSection
        cardNumbers={cardNumbers}
        handleCardNumberChange={handleCardNumberChange}
        cardNumberError={cardNumberError}
      />
    );
  }
};

export const InValid: Story = {
  args: {
    cardNumbers: { first: 'aasd', second: '2123', third: '4123', fourth: '2111' },
    cardNumberError: '숫자만 입력해 주세요.'
  },
  render: ({ cardNumbers: initialNumbers, cardNumberError: initialError }) => {
    const [cardNumbers, setCardNumbers] = useState<CardNumber>(initialNumbers);
    const [cardNumberError, setCardNumberError] = useState(initialError);

    const handleCardNumberChange = (key: keyof CardNumber, value: string) => {
      setCardNumbers((prev) => ({ ...prev, [key]: value }));
      setCardNumberError('');
    };

    return (
      <CardNumberSection
        cardNumbers={cardNumbers}
        handleCardNumberChange={handleCardNumberChange}
        cardNumberError={cardNumberError}
      />
    );
  }
};
