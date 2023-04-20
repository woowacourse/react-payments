import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview/CardPreview';

const meta = {
  component: CardPreview,
  title: 'CardPreview',
} satisfies Meta<typeof CardPreview>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    cardNumber: '1111-2222-3333-4444',
    cardExpirationDate: '12/25',
    cardOwnerName: '🎴🐇',
  },
};

export default meta;
