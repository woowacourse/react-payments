import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import ExpiryField from './ExpiryField';
import {useExpiryDate} from '../../../hooks/useExpiryDate';

const mockExpiryField = (expiryMonth = '', expiryYear = '') => ({
  expiryMonth,
  expiryYear,
  isComplete: expiryMonth.length === 2 && expiryYear.length === 2,
  hasAnyError: false,
  firstErrorIdx: -1,
  errorMsg: '',
  handleMonthChange: fn(),
  handleYearChange: fn(),
  handleBlur: fn(),
});

const meta = {
  title: 'feature/CardRegister/components/ExpiryField',
  component: ExpiryField,
  tags: ['autodocs'],
  args: mockExpiryField(),
} satisfies Meta<typeof ExpiryField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: mockExpiryField('5', ''),
};

export const Filled: Story = {
  args: mockExpiryField('12', '30'),
};

export const Interactive: Story = {
  render: function InteractiveExpiryField() {
    const expiryField = useExpiryDate();
    return <ExpiryField {...expiryField} />;
  },
};
