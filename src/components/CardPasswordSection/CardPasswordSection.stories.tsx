import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardPasswordSection from './CardPasswordSection';

const meta: Meta<typeof CardPasswordSection> = {
  title: 'CardPasswordSection',
  component: CardPasswordSection
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardPassword: '',
    cardPasswordError: ''
  },
  render: ({ cardPassword: initialPassword }) => {
    const [cardPassword, setCardPassword] = useState(initialPassword);
    const [cardPasswordError, setCardPasswordError] = useState('');

    const handleCardPasswordChange = (_: string, value: string) => {
      setCardPassword(value);
      setCardPasswordError('');
    };

    return (
      <CardPasswordSection
        cardPassword={cardPassword}
        handleCardPasswordChange={handleCardPasswordChange}
        cardPasswordError={cardPasswordError}
      />
    );
  }
};

export const Valid: Story = {
  args: {
    cardPassword: '12',
    cardPasswordError: ''
  },
  render: ({ cardPassword: initialPassword }) => {
    const [cardPassword, setCardPassword] = useState(initialPassword);
    const [cardPasswordError, setCardPasswordError] = useState('');

    const handleCardPasswordChange = (_: string, value: string) => {
      setCardPassword(value);
      setCardPasswordError('');
    };

    return (
      <CardPasswordSection
        cardPassword={cardPassword}
        handleCardPasswordChange={handleCardPasswordChange}
        cardPasswordError={cardPasswordError}
      />
    );
  }
};

export const InValid: Story = {
  args: {
    cardPassword: 'ab',
    cardPasswordError: '숫자만 입력해 주세요.'
  },
  render: ({ cardPassword: initialPassword, cardPasswordError: initialError }) => {
    const [cardPassword, setCardPassword] = useState(initialPassword);
    const [cardPasswordError, setCardPasswordError] = useState(initialError);

    const handleCardPasswordChange = (_: string, value: string) => {
      setCardPassword(value);
      setCardPasswordError('');
    };

    return (
      <CardPasswordSection
        cardPassword={cardPassword}
        handleCardPasswordChange={handleCardPasswordChange}
        cardPasswordError={cardPasswordError}
      />
    );
  }
};
