import { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  argTypes: {
    cardCompany: {
      defaultValue: 'hyundai',
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    cardCompany: 'hyundai',
    ownerName: 'UKKO',
    cardNumber: ['1111', '2222', '3333', '4444'],
    expirationDate: ['12', '24'],
  },

  render: (args) => <Card {...args}></Card>,
} satisfies Story;
