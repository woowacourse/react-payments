import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import PasswordField from '../../../../../feature/CardRegister/components/InfoInputSection/PasswordField';
import {
  usePasswordField,
  type PasswordFieldType,
} from '../../../../../feature/CardRegister/hooks/usePasswordField';

const createPasswordField = (
  overrides: Partial<PasswordFieldType> = {},
): PasswordFieldType => ({
  password: '',
  errorMessage: '',
  hasError: false,
  isComplete: false,
  handleChange: fn(),
  handleBlur: fn(),
  ...overrides,
});

const meta = {
  title: 'feature/CardRegister/components/PasswordField',
  component: PasswordField,
  tags: ['autodocs'],
  args: {
    field: createPasswordField(),
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    field: createPasswordField({
      password: '12',
      isComplete: true,
    }),
  },
};

export const Error: Story = {
  args: {
    field: createPasswordField({
      password: '1',
      errorMessage: '비밀번호 2자리를 입력해 주세요',
      hasError: true,
    }),
  },
};

export const Interactive: Story = {
  render: function InteractivePasswordField() {
    const field = usePasswordField({});

    return <PasswordField field={field} />;
  },
};
