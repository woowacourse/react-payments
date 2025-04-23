import type { Meta, StoryObj } from '@storybook/react';
import { CardPreview } from '@/components';
import { CardType } from '@/types';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardType: 'visa' as CardType,
    cardNumber: {
      first: '1234',
      second: '5678',
      third: '9012',
      fourth: '3456',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    selectedCompany: 'shinhan',
    cardCVCNumber: '123',
    isFlipped: false,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
