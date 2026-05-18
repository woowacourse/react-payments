import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { fn } from 'storybook/test';

import CardList from '../../../../feature/CardList/components/CardList';
import type { Card } from '../../../../domain/card/types/card';

const cards: Card[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    issuerCode: '41',
    number: '411111******1111',
    expirationDate: '06/30',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    issuerCode: '15',
    number: '523456******7890',
    expirationDate: '09/27',
  },
];

const meta = {
  title: 'feature/CardList/components/CardList',
  component: CardList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/cards']}>
        <div style={{ width: '320px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    cards,
    handleDeleteCard: fn(),
  },
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Single: Story = {
  args: {
    cards: [cards[0]],
  },
};
