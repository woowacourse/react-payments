import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expiration: ['12', '12'],
  },
};
export const Visa: Story = {
  args: {
    cardNumber: ['4123', '1234', '1234', '1234'],
    expiration: ['12', '12'],
  },
};
export const MasterCard: Story = {
  args: {
    cardNumber: ['5123', '4567', '8910', '1112'],
    expiration: ['12', '12'],
  },
};
