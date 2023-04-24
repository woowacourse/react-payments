import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  component: Card,
  title: 'Section/Card',
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardStory: Story = {
  args: {
    cardNumbers: {
      0: '1111',
      1: '2222',
      2: '3333',
      3: '4444',
    },
    expiredDate: {
      0: '12',
      1: '31',
    },
    cardOwnerName: 'NAME',
  },
};
