import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardExpirationDate from '../../components/CardExpirationDate/CardExpirationDate';
import { ERROR_MESSAGE } from '../../constants';
import { DateType } from '../../types';

const meta = {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
  argTypes: {
    cardExpirationDate: { control: false },
    cardExpirationDateErrorMessage: { control: false },
    setCardExpirationDate: { control: false },
    setCardExpirationDateErrorMessage: { control: false },
  },
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

type Story = StoryObj<typeof CardExpirationDate>;

export const Default: Story = {
  render: function Render() {
    const [cardExpirationDate, setCardExpirationDate] = useState<Record<DateType, string>>({
      month: '',
      year: '',
    });
    const [cardExpirationDateErrorMessage, setCardExpirationDateErrorMessage] = useState<Record<DateType, string>>({
      month: '',
      year: '',
    });

    return (
      <CardExpirationDate
        cardExpirationDate={cardExpirationDate}
        setCardExpirationDate={setCardExpirationDate}
        cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
        setCardExpirationDateErrorMessage={setCardExpirationDateErrorMessage}
      />
    );
  },
};

export const Valid: Story = {
  name: '유효한 카드 유효기간 입력',
  args: {
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    cardExpirationDateErrorMessage: {
      month: '',
      year: '',
    },
  },
};

export const Error: Story = {
  name: '유효하지 않은 카드 유효기간 입력',
  args: {
    cardExpirationDate: {
      month: '13',
      year: '25',
    },
    cardExpirationDateErrorMessage: {
      month: ERROR_MESSAGE.validMonth,
      year: ERROR_MESSAGE.pastYear,
    },
  },
};
