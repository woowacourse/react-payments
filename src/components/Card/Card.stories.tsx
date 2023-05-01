import { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  argTypes: {
    cardType: {
      defaultValue: '우리카드',
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    cardType: '우리카드',
    owner: 'CONAN',
    cardNumber: ['0000', '1111', '2222', '3333'],
    // FIXME: Storybook에서 12월 24일로 표기되고 있음.
    expirationDate: ['12', '24'],
  },

  render: (args) => <Card {...args}></Card>,
};
