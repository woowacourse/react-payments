import type { Meta, StoryObj } from '@storybook/react';

import CardPreview from './CardPreview';

const CardPreviewMeta = {
  component: CardPreview,
  title: 'CardPreview Component',
} satisfies Meta<typeof CardPreview>;

export default CardPreviewMeta;

type Story = StoryObj<typeof CardPreviewMeta>;

export const Primary: Story = {
  args: {
    cardInfo: {
      number1: '1234',
      number2: '5678',
      number3: '1234',
      number4: '1234',
      month: '12',
      year: '23',
      name: 'AIDEN',
    },
  },
};
