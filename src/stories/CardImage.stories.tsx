import type { Meta, StoryObj } from '@storybook/react';
import CardImage from '../components/CardImage';

const meta = {
  title: 'CardImage',
  component: CardImage,
  argTypes: {},
} satisfies Meta<typeof CardImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['4234', '1234', '1234', '1234'],
    cardPeriod: ['01', '25'],
    cardOwner: ['WOOTECO'],
  },
};
export const Default2: Story = {
  args: {
    cardNumber: ['5134', '1234', '1234', '1234'],
    cardPeriod: ['01', '25'],
    cardOwner: ['WOOTECO'],
  },
};
export const Default3: Story = {
  args: {
    cardNumber: ['1134', '1234', '1234', '1234'],
    cardPeriod: ['01', '25'],
    cardOwner: ['WOOTECO'],
  },
};
