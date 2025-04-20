import type { Meta, StoryObj } from '@storybook/react';
import { CardPreview } from '@/components';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  argTypes: {
    cardExpirationDate: {
      control: 'object',
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    cardNumber: {
      first: '5134',
      second: '2312',
      third: '1232',
      fourth: '2353',
    },
    cardType: 'master',
  },
};
