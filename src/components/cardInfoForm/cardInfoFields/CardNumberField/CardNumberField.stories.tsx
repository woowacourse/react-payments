import type { Meta, StoryObj } from '@storybook/react';
import CardNumberField from './CardNumberField';

const meta = {
  title: 'CardNumberField',
  component: CardNumberField,
} satisfies Meta<typeof CardNumberField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    isError: [false, false, false, false],
    onChange: () => {},
  },
  render: (args) => {
    return <CardNumberField {...args} />;
  },
};

export const Error: Story = {
  args: {
    cardNumber: ['123', '45', '1234', '1'],
    isError: [true, true, false, true],
    onChange: () => {},
  },
  render: (args) => {
    return <CardNumberField {...args} />;
  },
};
