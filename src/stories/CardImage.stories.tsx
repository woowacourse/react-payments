import type { Meta, StoryObj } from '@storybook/react';
import CardImage from '../components/CardImage';

const meta = {
  title: 'CardImage',
  component: CardImage,
} satisfies Meta<typeof CardImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1134', '1234', '1234', '1234'],
    cardPeriod: ['01', '25'],
    cardOwner: ['WOOTECO'],
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4234', '1234', '1234', '1234'],
    cardPeriod: ['01', '25'],
    cardOwner: ['WOOTECO'],
  },
};
export const MasterCard: Story = {
  args: {
    cardNumber: ['5134', '1234', '1234', '1234'],
    cardPeriod: ['01', '25'],
    cardOwner: ['WOOTECO'],
  },
};
