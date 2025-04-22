import type { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';

const meta: Meta<typeof CardNumberInput> = {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
  tags: ['autodocs'],
  argTypes: {
    values: {
      control: 'object',
      description: '값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  args: {
    values: ['1111', '2222', '3333', '4444'],
  },
};
