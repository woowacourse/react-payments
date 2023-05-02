import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    cardCompany: '국민카드',
    cardFirstNumber: '1234',
    cardSecondNumber: '2345',
    cardThirdNumber: '4456',
    cardFourthNumber: '2357',
    cardOwner: 'LEE',
    expireYear: '01',
    expireMonth: '01',
  },
};
