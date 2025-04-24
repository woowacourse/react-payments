import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';

const meta: Meta<typeof CardNumberInput> = {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  args: {
    cardNumber: {
      first: 1234,
      second: 5678,
      third: 9101,
      forth: 1213,
    },
    errorState: {
      first: false,
      second: false,
      third: false,
      forth: false,
    },
  },
};

export const Error: Story = {
  args: {
    cardNumber: {
      first: 1234,
      second: 5678,
      third: 9101,
      forth: 1213,
    },
    errorState: {
      first: true,
      second: false,
      third: false,
      forth: false,
    },
  },
};
