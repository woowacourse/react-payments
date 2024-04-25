import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { CardForm } from '../components';
import { INITIAL_CARD_INFO } from '../modules/useCardInfoReducer';

const meta = {
  title: 'Form',
  component: CardForm,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardFormDefault: Story = {
  args: {
    cardInfo: INITIAL_CARD_INFO,
    editCardCVC: () => {},
    editCardCompany: () => {},
    editCardMark: () => {},
    editCardNumbers: () => {},
    editCardPassword: () => {},
    editCardPeriod: () => {},
    editCardUserName: () => {},
    resetCardInfo: () => {},
    setCardSide: () => {},
  },
};
