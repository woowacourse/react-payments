import { Meta, StoryObj } from '@storybook/react';
import CardNumbers from '../components/CardNumbers/CardNumbers';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbersStory: Story = {
  args: {
    cardNumbers: ['1111', '2222', '3333', '4444'],
    errorMessage: '',
    handleCardNumbers: () => {
      return;
    },
  },
};
