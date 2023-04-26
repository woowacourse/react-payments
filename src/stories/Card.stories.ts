import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    expireYear: '01',
    expireMonth: '01',
  },
};
