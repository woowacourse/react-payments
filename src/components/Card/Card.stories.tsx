import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: {
      first: null,
      second: null,
      third: null,
      forth: null,
    },
    cardExpirationDate: {
      month: '',
      year: '',
    },
  },
};

export const Visa: Story = {
  args: {
    cardNumber: {
      first: 4234,
      second: 5678,
      third: 9012,
      forth: 3456,
    },
    cardExpirationDate: {
      month: '06',
      year: '19',
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardNumber: {
      first: 5534,
      second: 5678,
      third: 9012,
      forth: 3456,
    },
    cardExpirationDate: {
      month: '06',
      year: '19',
    },
  },
};
