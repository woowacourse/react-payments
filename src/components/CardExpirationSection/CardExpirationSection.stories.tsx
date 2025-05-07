import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardExpirationSection from './CardExpirationSection';
import { CardExpiration } from '../../types/card';

const meta: Meta<typeof CardExpirationSection> = {
  title: 'CardExpirationSection',
  component: CardExpirationSection
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardExpiration: { month: '', year: '' },
    cardExpirationError: { month: '', year: '' }
  },
  render: ({ cardExpiration: initialExpiration }) => {
    const [cardExpiration, setCardExpiration] = useState<CardExpiration>(initialExpiration);
    const [cardExpirationError, setCardExpirationError] = useState<CardExpiration>({ month: '', year: '' });

    const handleCardExpirationChange = (key: keyof CardExpiration, value: string) => {
      setCardExpiration((prev) => ({ ...prev, [key]: value }));
      setCardExpirationError((prev) => ({ ...prev, [key]: '' }));
    };

    return (
      <CardExpirationSection
        cardExpiration={cardExpiration}
        handleCardExpirationChange={handleCardExpirationChange}
        cardExpirationError={cardExpirationError}
      />
    );
  }
};

export const Valid: Story = {
  args: {
    cardExpiration: { month: '12', year: '28' },
    cardExpirationError: { month: '', year: '' }
  },
  render: ({ cardExpiration: initialExpiration }) => {
    const [cardExpiration, setCardExpiration] = useState<CardExpiration>(initialExpiration);
    const [cardExpirationError, setCardExpirationError] = useState<CardExpiration>({ month: '', year: '' });

    const handleCardExpirationChange = (key: keyof CardExpiration, value: string) => {
      setCardExpiration((prev) => ({ ...prev, [key]: value }));
      setCardExpirationError((prev) => ({ ...prev, [key]: '' }));
    };

    return (
      <CardExpirationSection
        cardExpiration={cardExpiration}
        handleCardExpirationChange={handleCardExpirationChange}
        cardExpirationError={cardExpirationError}
      />
    );
  }
};

export const InValid: Story = {
  args: {
    cardExpiration: { month: 'aq', year: '12' },
    cardExpirationError: { month: '숫자만 입력해 주세요.', year: '' }
  },
  render: ({ cardExpiration: initialExpiration, cardExpirationError: initialError }) => {
    const [cardExpiration, setCardExpiration] = useState<CardExpiration>(initialExpiration);
    const [cardExpirationError, setCardExpirationError] = useState<CardExpiration>(initialError);

    const handleCardExpirationChange = (key: keyof CardExpiration, value: string) => {
      setCardExpiration((prev) => ({ ...prev, [key]: value }));
      setCardExpirationError((prev) => ({ ...prev, [key]: '' }));
    };

    return (
      <CardExpirationSection
        cardExpiration={cardExpiration}
        handleCardExpirationChange={handleCardExpirationChange}
        cardExpirationError={cardExpirationError}
      />
    );
  }
};
