import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  tags: ['autodocs'],
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    cardType: '현대카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    expired: '01/01',
  },
};

export const Primary2: Story = {
  args: {
    cardType: 'BC카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    expired: '01/01',
  },
};
export const Primary3: Story = {
  args: {
    cardType: '신한카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    expired: '01/01',
  },
};
