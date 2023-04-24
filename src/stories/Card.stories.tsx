import Card from '../components/Common/Card';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;

export const Default: Story = {
  args: {
    cardInformation: {
      cardNumber: ['1234', '1234', '1234', '1234'],
      expirationDate: ['YY', 'MM'],
      owner: ['NAME'],
    },
    isAddForm: true,
  },
};

export const BlankCard: Story = {
  args: { isAddForm: true },
};

export const AddCard: Story = {
  args: { isAddForm: false },
};
