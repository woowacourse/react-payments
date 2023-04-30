import type { Meta, StoryObj } from '@storybook/react';

import NameRegisterCard from '.';

const meta: Meta<typeof NameRegisterCard> = {
  title: 'templates/NameRegisterCard',
  component: NameRegisterCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: {
      id: '1',
      cardNumbers: ['1235', '1234', '1111', '1111'],
      cardExpirationDate: ['12', '23'],
      cardOwner: ['hwang junseung'],
      cardCVC: ['111'],
      cardPWD: ['1', '2'],
    },
  },
};
