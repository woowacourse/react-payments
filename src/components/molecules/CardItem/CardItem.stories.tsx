import type { Meta, StoryObj } from '@storybook/react';

import CardItem from '.';

const meta: Meta<typeof CardItem> = {
  title: 'molecules/CardItem',
  component: CardItem,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: {
      cardName: 'BC',
      cardNumbers: ['1235', '1234', '1111', '1111'],
      cardExpirationDate: ['12', '23'],
      cardOwner: ['hwang junseung'],
      cardCVC: ['111'],
      cardPWD: ['1', '2'],
    },
  },
};
