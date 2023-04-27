import { Meta, StoryObj } from '@storybook/react';
import CardNumbers from './CardNumbers';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
  argTypes: {
    checkCardNumbers: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CardNumbers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbersStory: Story = {
  args: {
    cardNumbers: {
      0: '1111',
      1: '2222',
      2: '3333',
      3: '4444',
    },
    checkCardNumbers: () => true,
  },
};
