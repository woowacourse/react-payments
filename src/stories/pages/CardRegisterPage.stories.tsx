import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { CardsProvider } from '../../domain/context/CardsContext';
import CardRegisterPage from '../../pages/CardRegisterPage';
import { ModalProvider } from '../../utils/context/ModalContext';

const meta: Meta<typeof CardRegisterPage> = {
  title: 'pages/CardRegisterPage',
  component: CardRegisterPage,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px' }}>
        <CardsProvider>
          <ModalProvider>
            <BrowserRouter>
              <Story />
            </BrowserRouter>
          </ModalProvider>
        </CardsProvider>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardRegisterPage>;

export const Default: Story = {};
