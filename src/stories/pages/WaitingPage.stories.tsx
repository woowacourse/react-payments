import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { CardsProvider } from '../../domain/context/CardsContext';
import WaitingPage from '../../pages/WaitingPage';

const meta: Meta<typeof WaitingPage> = {
  title: 'pages/WaitingPage',
  component: WaitingPage,
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
type Story = StoryObj<typeof WaitingPage>;

export const Default: Story = {};
