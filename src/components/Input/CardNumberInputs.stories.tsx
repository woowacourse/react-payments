import { Meta, StoryObj } from '@storybook/react';
import { CardNumberInputs } from './CardNumberInputs';

const meta = {
  component: CardNumberInputs,
  title: 'Section/CardNumbers',
} satisfies Meta<typeof CardNumberInputs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbersStory: Story = {
  args: {
    valueAndOnChanges: [
      {
        value: '1234',
      },
    ],
  },
};
