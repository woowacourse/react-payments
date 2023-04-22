import type { Meta, StoryObj } from '@storybook/react';
import { CreditCardView } from './CreditCardView';

const meta = {
  title: 'CreditCardView',
  component: CreditCardView,
} satisfies Meta<typeof CreditCardView>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '엽토카드',
    cardNumbers: '1212343456567878',
    expirationDate: ['12', '24'],
  },
};

export default meta;
