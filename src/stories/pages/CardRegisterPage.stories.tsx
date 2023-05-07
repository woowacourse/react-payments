import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import CardRegisterPage from '../../pages/CardRegisterPage';
import { CardFormValueContext } from '../../contexts/CardFormContext';
import { CardData, CardInfo } from '../../types/card';

const meta: Meta<typeof CardRegisterPage> = {
  title: 'pages/CardRegisterPage',
  component: CardRegisterPage,
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
  name: '황펭',
  company: '카카오뱅크',
  number: { first: '0000', second: '0000', third: '0000', fourth: '0000' },
  expiredDate: { month: '12', year: '24' },
  owner: 'WOOWA',
  cvc: '',
  password: { first: '', second: '' },
};

export default meta;
type Story = StoryObj<typeof CardRegisterPage>;

export const Default: Story = {
  args: {
    registerCard: (cardData: CardData) => cardData,
  },
};
