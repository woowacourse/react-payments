import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import CardListItem from '../../../../feature/CardList/components/CardListItem';
import type { Card } from '../../../../domain/card/types/card';

const card: Card = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  issuerCode: '31',
  number: '551112******9012',
  expirationDate: '12/28',
};

const meta = {
  title: 'feature/CardList/components/CardListItem',
  component: CardListItem,
  tags: ['autodocs'],
  args: {
    card,
    handleDeleteCard: fn(),
  },
} satisfies Meta<typeof CardListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BC: Story = {};

export const Shinhan: Story = {
  args: {
    card: {
      ...card,
      id: '550e8400-e29b-41d4-a716-446655440001',
      issuerCode: '41',
      number: '411111******1111',
      expirationDate: '06/30',
    },
  },
};

export const KakaoBank: Story = {
  args: {
    card: {
      ...card,
      id: '550e8400-e29b-41d4-a716-446655440002',
      issuerCode: '15',
      number: '523456******7890',
      expirationDate: '09/27',
    },
  },
};
