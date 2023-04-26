import { Meta, StoryObj } from '@storybook/react';
import { CreditCard } from './CreditCard';

const meta = {
  component: CreditCard,
  title: 'Section/Card',
} satisfies Meta<typeof CreditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardStory: Story = {
  args: {
    card: {
      bank: '현대카드',
      numbers: ['1234', '1234', '1234', '1234'],
      expirationDate: {
        year: '23',
        month: '11',
      },
      name: 'PARK',
      securityCode: '234',
      password: {
        first: '1',
        second: '2',
      },
    },
  },
};
