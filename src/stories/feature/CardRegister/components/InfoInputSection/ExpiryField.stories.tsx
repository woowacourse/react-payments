import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ExpiryField from '../../../../../feature/CardRegister/components/InfoInputSection/ExpiryField';

const meta = {
  title: 'feature/CardRegister/components/ExpiryField',
  component: ExpiryField,
  tags: ['autodocs'],
  args: {
    expiryMonth: '',
    expiryYear: '',
    handleExpiryMonthChange: fn(),
    handleExpiryYearChange: fn(),
  },
} satisfies Meta<typeof ExpiryField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    expiryMonth: '12',
    expiryYear: '',
    handleExpiryMonthChange: fn(),
    handleExpiryYearChange: fn(),
  },
};

export const Filled: Story = {
  args: {
    expiryMonth: '12',
    expiryYear: '30',
    handleExpiryMonthChange: fn(),
    handleExpiryYearChange: fn(),
  },
};

export const Interactive: Story = {
  args: {
    expiryMonth: '',
    expiryYear: '',
    handleExpiryMonthChange: fn(),
    handleExpiryYearChange: fn(),
  },
  render: function InteractiveExpiryField(args) {
    const [expiryMonth, setExpiryMonth] = useState(args.expiryMonth);
    const [expiryYear, setExpiryYear] = useState(args.expiryYear);

    return (
      <ExpiryField
        {...args}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        handleExpiryMonthChange={setExpiryMonth}
        handleExpiryYearChange={setExpiryYear}
      />
    );
  },
};
