import type { Meta, StoryObj } from '@storybook/react';
import CardNumber, { SequenceType } from '../../components/CardNumber';
import { useState } from 'storybook/internal/preview-api';

const meta = {
  title: 'CardNumber',
  component: CardNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    setCardNumber: () => {},
    cardNumberErrorMessage: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    setCardNumberErrorMessage: () => {},
  },
  render: function Render(args) {
    const [cardNumber, setCardNumber] = useState<Record<SequenceType, string>>({
      first: '',
      second: '',
      third: '',
      fourth: '',
    });
    const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState({
      first: '',
      second: '',
      third: '',
      fourth: '',
    });
    return (
      <CardNumber
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardNumberErrorMessage={cardNumberErrorMessage}
        setCardNumberErrorMessage={setCardNumberErrorMessage}
      ></CardNumber>
    );
  },
};

export const Valid: Story = {
  args: {
    cardNumber: {
      first: '1234',
      second: '4567',
      third: '8910',
      fourth: '1112',
    },
    setCardNumber: () => {},
    cardNumberErrorMessage: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    setCardNumberErrorMessage: () => {},
  },
};

export const Error: Story = {
  args: {
    cardNumber: {
      first: 'd455',
      second: 's4565',
      third: '1234',
      fourth: '5678',
    },
    setCardNumber: () => {},
    cardNumberErrorMessage: {
      first: '숫자만 입력 가능합니다.',
      second: '숫자만 입력 가능합니다.',
      third: '',
      fourth: '',
    },
    setCardNumberErrorMessage: () => {},
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
