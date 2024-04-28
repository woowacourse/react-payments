import type { Meta, StoryObj } from '@storybook/react';
import CardNumbers, { CardNumberProps } from './CardNumbers';

const meta: Meta<CardNumberProps> = {
  title: 'Components/CardNumbers',
  component: CardNumbers,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: ['1234', '5678', '9012', '3456'],
  },
};

export const WithZeroes: Story = {
  args: {
    cardNumbers: ['0', '0', '0', '0'],
  },
};
