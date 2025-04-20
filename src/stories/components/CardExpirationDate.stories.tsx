import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardExpirationDate from '../../components/CardExpirationDate/CardExpirationDate';
import { ERROR_MESSAGE } from '../../constants';
import { DateType } from '../../types';
import { fn } from '@storybook/test';

export const ActionsData = {
  setCardExpirationDate: fn(),
  setCardExpirationDateErrorMessage: fn(),
};

const meta = {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
  argTypes: {
    cardExpirationDate: { control: false },
    cardExpirationDateErrorMessage: { control: 'object' },
    setCardExpirationDate: { control: false },
    setCardExpirationDateErrorMessage: { control: false },
  },
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

type Story = StoryObj<typeof CardExpirationDate>;

export const Default: Story = {
  name: '기본 상태',
  args: {
    cardExpirationDate: {
      month: '',
      year: '',
    },
    cardExpirationDateErrorMessage: {
      month: '',
      year: '',
    },
  },
  render: function Render(args) {
    const [cardExpirationDate, setCardExpirationDate] = useState<Record<DateType, string>>({
      month: '',
      year: '',
    });

    return (
      <CardExpirationDate
        {...args}
        cardExpirationDate={cardExpirationDate}
        setCardExpirationDate={setCardExpirationDate}
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
      month: '1a',
      year: '25',
    },
    cardExpirationDateErrorMessage: {
      month: ERROR_MESSAGE.cardExpirationDate.month,
      year: ERROR_MESSAGE.cardExpirationDate.year,
    },
  },
};
