import type { Meta, StoryObj } from '@storybook/react';
import CardFrontImage from '../components/CardFrontImage';

const meta = {
  title: 'CardFrontImage',
  component: CardFrontImage,
} satisfies Meta<typeof CardFrontImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1134', '1234', '1234', '1234'],
    cardPeriod: { month: '01', year: '25' },
    cardOwner: 'WOOTECO',
    cardProvider: '신한카드',
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4234', '1234', '1234', '1234'],
    cardPeriod: { month: '01', year: '25' },
    cardOwner: 'WOOTECO',
    cardProvider: '신한카드',
  },
};
export const MasterCard: Story = {
  args: {
    cardNumber: ['5134', '1234', '1234', '1234'],
    cardPeriod: { month: '01', year: '25' },
    cardOwner: 'WOOTECO',
    cardProvider: '신한카드',
  },
};
export const KaKao: Story = {
  args: {
    cardNumber: ['5134', '1234', '1234', '1234'],
    cardPeriod: { month: '01', year: '25' },
    cardOwner: 'WOOTECO',
    cardProvider: '카카오뱅크',
  },
};
