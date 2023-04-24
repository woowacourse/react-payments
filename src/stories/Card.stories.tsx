import Card, { CARD_TYPE } from '../components/Card';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;

export const Default: Story = {
  args: {
    cardInformation: {
      cardNumber: ['1234', '1234', '1234', '1234'],
      expirationDate: { year: 'YY', month: 'MM' },
      owner: 'NAME',
    },
    cardType: CARD_TYPE.DEFAULT,
  },
};

export const RegisterCard: Story = {
  args: { cardType: CARD_TYPE.REGISTER_BUTTON },
};

export const DefaultCard: Story = {
  args: { cardType: CARD_TYPE.DEFAULT },
};
