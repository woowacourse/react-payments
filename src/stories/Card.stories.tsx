import Card from '../components/Common/Card';
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
      cardName: '카드이름',
      bankName: 'OO카드',
      cardNumber: ['1234', '1234', '1234', '1234'],
      expirationDate: ['YY', 'MM'],
      owner: ['NAME'],
    },
    isAddForm: true,
    isShowName: true,
  },
};

export const NoName: Story = {
  args: {
    cardInformation: {
      cardName: '카드이름',
      bankName: 'OO카드',
      cardNumber: ['1234', '1234', '1234', '1234'],
      expirationDate: ['YY', 'MM'],
      owner: ['NAME'],
    },
    isAddForm: true,
  },
};

export const HasBank: Story = {
  args: {
    cardInformation: {
      cardName: '카드이름',
      bankName: '신한카드',
      cardNumber: ['1234', '1234', '1234', '1234'],
      expirationDate: ['YY', 'MM'],
      owner: ['NAME'],
    },
    isAddForm: true,
    isShowName: true,
  },
};

export const BlankCard: Story = {
  args: { isAddForm: true },
};

export const AddCard: Story = {
  args: { isAddForm: false },
};
