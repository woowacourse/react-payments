import type { Meta, StoryObj } from '@storybook/react';
import type { CreditCard } from '../../domain/CreditCard';
import creditCards from '../../fixtures/creditCards.json';
import { CreditCardList } from './CreditCardList';

const meta = {
  title: 'payments/CreditCardList',
  component: CreditCardList,
} satisfies Meta<typeof CreditCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    creditCards: (creditCards as CreditCard[]).slice(0, 3),
  },
};

export const WithManyItems: Story = {
  args: {
    creditCards: creditCards as CreditCard[],
  },
};
