import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import CardItem from '../components/Cards/CardItem';
import type { Card } from '../types/api';

const shinhanCard: Card = {
  id: '1',
  issuerCode: '41',
  number: '4123456789012345',
  expirationDate: '12/26',
};

const bcCard: Card = {
  id: '2',
  issuerCode: '31',
  number: '5212345678901234',
  expirationDate: '08/28',
};

const unknownCard: Card = {
  id: '3',
  issuerCode: '99',
  number: '9999123456789012',
  expirationDate: '03/30',
};

const meta = {
  title: 'Cards/CardItem',
  component: CardItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: shinhanCard, refetcher: () => {} },
};

export const BCCard: Story = {
  args: { data: bcCard, refetcher: () => {} },
};

export const UnknownIssuer: Story = {
  args: { data: unknownCard, refetcher: () => {} },
};
