import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import CardInfoRegisterPage from '../pages/CardInfoRegisterPage';
import CardFormProvider from '../contexts/CardFormContext';

const meta: Meta<typeof CardInfoRegisterPage> = {
  title: 'pages/CardInfoRegisterPage',
  component: CardInfoRegisterPage,
  decorators: [
    (Story) => (
      <>
        <div style={{ maxWidth: '420px', margin: '0 auto' }}>
          <CardFormProvider>
            <BrowserRouter>
              <Story />
            </BrowserRouter>
          </CardFormProvider>
        </div>
        <div id="modal-root"></div>
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardInfoRegisterPage>;

export const Default: Story = {};
