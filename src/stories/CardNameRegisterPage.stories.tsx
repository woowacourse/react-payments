import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import CardNameRegisterPage from '../pages/CardNameRegisterPage';
import { CardFormValueContext } from '../contexts/CardFormContext';
import { CardInfo } from '../types/card';

const meta: Meta<typeof CardNameRegisterPage> = {
  title: 'pages/CardNameRegisterPage',
  component: CardNameRegisterPage,
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          maxWidth: '420px',
          height: '710px',
          margin: '0 auto',
        }}
      >
        <BrowserRouter>
          <CardFormValueContext.Provider value={MOCK_CARD_CONTEXT}>
            <Story />
          </CardFormValueContext.Provider>
        </BrowserRouter>
      </div>
    ),
  ],
};

const MOCK_CARD_CONTEXT: CardInfo = {
  company: '카카오뱅크',
  number: { first: '0000', second: '0000', third: '0000', fourth: '0000' },
  expiredDate: { month: '12', year: '24' },
  owner: 'WOOWA',
  cvc: '',
  password: { first: '', second: '' },
};

export default meta;
type Story = StoryObj<typeof CardNameRegisterPage>;

export const Default: Story = {};
