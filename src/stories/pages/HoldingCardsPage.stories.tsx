import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { CardsProvider } from '../../domain/context/CardsContext';
import HoldingCardsPage from '../../pages/HoldingCardsPage';

const meta: Meta<typeof HoldingCardsPage> = {
  title: 'pages/HoldingCardsPage',
  component: HoldingCardsPage,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px' }}>
        <CardsProvider>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </CardsProvider>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HoldingCardsPage>;

export const Default: Story = {};
