import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ExpiryField from '../../../../../feature/CardRegister/components/InfoInputSection/ExpiryField';
import {
  useExpiryField,
  type ExpiryFieldType,
} from '../../../../../feature/CardRegister/hooks/useExpiryField';

const createExpiryField = (
  overrides: Partial<ExpiryFieldType> = {},
): ExpiryFieldType => ({
  expiryMonth: '',
  expiryYear: '',
  firstErrorIndex: -1,
  errorMessage: '',
  isComplete: false,
  setInputRef: () => () => undefined,
  handleMonthChange: fn(),
  handleYearChange: fn(),
  handleExpiryBlur: fn(),
  handleKeyDown: fn(),
  ...overrides,
});

const meta = {
  title: 'feature/CardRegister/components/ExpiryField',
  component: ExpiryField,
  tags: ['autodocs'],
  args: {
    field: createExpiryField(),
  },
} satisfies Meta<typeof ExpiryField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    field: createExpiryField({
      expiryMonth: '12',
    }),
  },
};

export const Filled: Story = {
  args: {
    field: createExpiryField({
      expiryMonth: '12',
      expiryYear: '30',
      isComplete: true,
    }),
  },
};

export const Error: Story = {
  args: {
    field: createExpiryField({
      expiryMonth: '13',
      firstErrorIndex: 0,
      errorMessage: '월은 01부터 12까지 입력해 주세요',
    }),
  },
};

export const Interactive: Story = {
  render: function InteractiveExpiryField() {
    const field = useExpiryField({});

    return <ExpiryField field={field} />;
  },
};
