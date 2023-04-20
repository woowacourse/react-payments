import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};

export const NoOwnerName: Story = {
  args: {
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
  },
};
