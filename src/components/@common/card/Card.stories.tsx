import { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta = {
  component: Card,
  title: 'Card',
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    ownerName: 'Ukko',
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: ['12', '24'],
    cardCompany: 'shinhan',
    onClick: () => {},
  },

  render: (args) => <Card {...args}></Card>,
} satisfies Story;
