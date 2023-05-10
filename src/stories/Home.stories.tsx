import { Meta, StoryObj } from '@storybook/react';
import Home from '../pages/Home';
import { CardType } from '../types/general';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: Home,
  title: 'Page/Home',
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => {
    const cards: CardType[] = [];

    return (
      <MemoryRouter initialEntries={['/']}>
        <Home cards={cards} />
      </MemoryRouter>
    );
  },
};

export const RegisteredCard: Story = {
  render: () => {
    const cards: CardType[] = [
      {
        id: 'a',
        cardNumbers: { 0: '1111', 1: '2222', 2: '3333', 3: '4444' },
        expiredDates: { 0: '12', 1: '23' },
        cardOwnerName: 'WOOWA',
        cardCompany: '신한카드',
      },
      {
        id: 'b',
        cardNumbers: { 0: '1212', 1: '3434', 2: '3333', 3: '4444' },
        expiredDates: { 0: '11', 1: '25' },
        cardOwnerName: 'WOOWA COURSE',
        cardCompany: '현대카드',
      },
    ];

    return (
      <MemoryRouter initialEntries={['/']}>
        <Home cards={cards} />
      </MemoryRouter>
    );
  },
};
