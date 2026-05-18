import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import CardsTemplate from '../components/Cards/CardsTemplate';
import type { Card } from '../types/api';

const mockCards: Card[] = [
  { id: '1', issuerCode: '41', number: '4123456789012345', expirationDate: '12/26' },
  { id: '2', issuerCode: '31', number: '5212345678901234', expirationDate: '08/28' },
  { id: '3', issuerCode: '15', number: '9999123456789012', expirationDate: '03/30' },
];

const meta = {
  title: 'Cards/CardsTemplate',
  component: CardsTemplate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: mockCards },
};

export const SingleCard: Story = {
  args: { data: [mockCards[0]] },
};
