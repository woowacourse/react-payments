import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview/CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPreview>;

type Story = StoryObj<typeof meta>;

export const defaultCard: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '',
  },
};

export const 비씨카드: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '비씨카드',
  },
};

export const 신한카드: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '신한카드',
  },
};

export const 카카오뱅크: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '카카오뱅크',
  },
};

export const 현대카드: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '현대카드',
  },
};

export const 우리카드: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '우리카드',
  },
};

export const 롯데카드: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '롯데카드',
  },
};

export const 하나카드: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '하나카드',
  },
};

export const 국민카드: Story = {
  args: {
    cardNumber: '1234-2345-4567-2345',
    expirationDate: '12/25',
    cardOwnerName: '김고니',
    selectedCard: '국민카드',
  },
};

export default meta;
