import type { Meta, StoryObj } from '@storybook/react';
import CardImage from '../components/cardInformationInput/CardImage';

const meta = {
  title: 'CardImage',
  component: CardImage,
} satisfies Meta<typeof CardImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: { number_1: '1111', number_2: '1111', number_3: '1111', number_4: '1111' },
    cardPeriod: { month: '01', year: '12' },
    cardOwner: { owner: 'woowa' },
  },
};

export const Visa: Story = {
  args: {
    cardNumber: { number_1: '4444', number_2: '4444', number_3: '4444', number_4: '4444' },
    cardPeriod: { month: '01', year: '12' },
    cardOwner: { owner: 'woowa' },
  },
};
export const MasterCard: Story = {
  args: {
    cardNumber: { number_1: '5111', number_2: '1111', number_3: '1111', number_4: '1111' },
    cardPeriod: { month: '01', year: '12' },
    cardOwner: { owner: 'woowa' },
  },
};
