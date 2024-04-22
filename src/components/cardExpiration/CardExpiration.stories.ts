import { Meta, StoryObj } from '@storybook/react';
import CardExpiration, { CardExpirationProps } from './CardExpiration';

const meta: Meta<CardExpirationProps> = {
  title: 'Components/CardExpiration',
  component: CardExpiration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    month: 0,
    year: 0,
  },
};

export const WithExpirationDate: Story = {
  args: {
    month: 12,
    year: 24,
  },
};
