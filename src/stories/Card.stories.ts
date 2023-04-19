import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    cardNumber: '1111222233334444',
    cardOwner: 'LEE',
    expired: '01/01',
  },
};
