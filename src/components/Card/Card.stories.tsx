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
    cardNumbers: ['1111', '2222', '3333', '4444'],
    expiredDates: ['02', '12'],
    cardOwnerName: 'NAME',
    cardCompany: '현대카드',
  },
};
