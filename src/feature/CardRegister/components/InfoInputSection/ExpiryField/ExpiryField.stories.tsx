import {useState, type ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import ExpiryField from './ExpiryField';

const meta = {
  title: 'feature/CardRegister/components/ExpiryField',
  component: ExpiryField,
  tags: ['autodocs'],
  args: {
    expiryMonth: '',
    expiryYear: '',
    setExpiryMonth: fn(),
    setExpiryYear: fn(),
    setIsError: fn(),
  },
} satisfies Meta<typeof ExpiryField>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulExpiryField = (args: ComponentProps<typeof ExpiryField>) => {
  const [expiryMonth, setExpiryMonth] = useState(args.expiryMonth);
  const [expiryYear, setExpiryYear] = useState(args.expiryYear);

  return (
    <ExpiryField
      {...args}
      expiryMonth={expiryMonth}
      expiryYear={expiryYear}
      setExpiryMonth={setExpiryMonth}
      setExpiryYear={setExpiryYear}
    />
  );
};

export const Empty: Story = {};

export const PadsSingleDigitMonthOnBlur: Story = {
  name: '월 한 자리 보정: 5 -> 05',
  render: StatefulExpiryField,
  args: {
    expiryMonth: '5',
  },
};

export const ShowsErrorWhenZeroMonthBlurred: Story = {
  name: '0 blur 에러',
  render: StatefulExpiryField,
  args: {
    expiryMonth: '0',
  },
};

export const ShowsErrorWhenMonthIsOutOfRange: Story = {
  name: '13 입력 시 에러',
  render: StatefulExpiryField,
  args: {
    expiryMonth: '13',
  },
};
