import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CardNumbersInputs from '../components/InputSection/CardNumbersInputs';

const meta = {
  title: 'CardNumbersInputs',
  component: CardNumbersInputs,
  argTypes: {
    cardNumbers: {
      firstNumber: { control: 'number' },
      secondNumber: { control: 'number' },
      thirdNumber: { control: 'number' },
      fourthNumber: { control: 'number' },
    },
  },
} satisfies Meta<typeof CardNumbersInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: {
      firstNumber: 1234,
      secondNumber: 5678,
      thirdNumber: 9012,
      fourthNumber: 3456,
    },
    setCardNumbers: fn(),
    isError: {
      firstNumber: false,
      secondNumber: false,
      thirdNumber: false,
      fourthNumber: false,
    },
  },
};

export const Error: Story = {
  args: {
    cardNumbers: {
      firstNumber: 1234,
      secondNumber: 5678,
      thirdNumber: 9012,
      fourthNumber: 3456,
    },
    setCardNumbers: fn(),
    isError: {
      firstNumber: true,
      secondNumber: false,
      thirdNumber: false,
      fourthNumber: false,
    },
  },
};
