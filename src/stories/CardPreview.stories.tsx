import type { Meta, StoryObj } from '@storybook/react';

import CardPreview from '../pages/RegisterPage/CardPreview';

const CardPreviewMeta = {
  component: CardPreview,
  title: '/FormInput/CardPreview Component',
} satisfies Meta<typeof CardPreview>;

export default CardPreviewMeta;

type Story = StoryObj<typeof CardPreviewMeta>;

export const Primary: Story = {
  args: {
    cardInfo: {
      cardNumber: {
        number1: '1234',
        number2: '5678',
        number3: '1234',
        number4: '1234',
      },
      date: {
        month: '12',
        year: '23',
      },

      name: 'AIDEN',
      cardCompany: {
        company: '현대카드',
        color: '#333333',
      },

      cardName: '아빠카드',
    },
  },
};
