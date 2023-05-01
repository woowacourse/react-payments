import { Meta, StoryObj } from '@storybook/react';
import { CardNumberInputs } from './CardNumberInputs';

const meta = {
  component: CardNumberInputs,
  title: 'Section/Inputs/CardNumberInput',
} satisfies Meta<typeof CardNumberInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInputsStory: Story = {
  args: {
    valueAndOnChanges: [
      { value: '1111', onChange: () => {} },
      { value: '2222', onChange: () => {} },
      { value: '3333', onChange: () => {} },
      { value: '4444', onChange: () => {} },
    ],
  },
};
