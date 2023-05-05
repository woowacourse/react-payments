import type { Meta, StoryObj } from '@storybook/react';

import HoldingCardsPage from '../pages/HoldingCardsPage';
import { BrowserRouter } from 'react-router-dom';

import type { CardData } from '../types/card';

const meta: Meta<typeof HoldingCardsPage> = {
  title: 'pages/HoldingCardsPage',
  component: HoldingCardsPage,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '420px', margin: '0 auto' }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

const MOCK_CARDS: CardData[] = [
  {
    name: '네이버카드',
    company: '하나카드',
    number: { first: '0000', second: '0000' },
    expiredDate: { month: '12', year: '24' },
    owner: 'WOOWA',
  },
  {
    name: '엄마카드',
    company: '현대카드',
    number: { first: '0000', second: '0000' },
    expiredDate: { month: '12', year: '24' },
    owner: 'WOOWA',
  },
];

export default meta;
type Story = StoryObj<typeof HoldingCardsPage>;

export const Default: Story = {
  args: {
    cards: [],
  },
};

export const WithCards: Story = {
  args: {
    cards: MOCK_CARDS,
  },
};
