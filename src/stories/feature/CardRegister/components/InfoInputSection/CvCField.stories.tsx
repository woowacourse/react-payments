import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import CvcField from '../../../../../feature/CardRegister/components/InfoInputSection/CvCField';
import {
  useCvcField,
  type CvcFieldType,
} from '../../../../../feature/CardRegister/hooks/useCvcField';

const createCvcField = (
  overrides: Partial<CvcFieldType> = {},
): CvcFieldType => ({
  cvcNumber: '',
  errorMessage: '',
  hasError: false,
  isComplete: false,
  handleChange: fn(),
  handleBlur: fn(),
  ...overrides,
});

const meta = {
  title: 'feature/CardRegister/components/CvcField',
  component: CvcField,
  tags: ['autodocs'],
  args: {
    field: createCvcField(),
  },
} satisfies Meta<typeof CvcField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    field: createCvcField({
      cvcNumber: '123',
      isComplete: true,
    }),
  },
};

export const Error: Story = {
  args: {
    field: createCvcField({
      cvcNumber: '12',
      errorMessage: 'CVC 번호 3자리를 입력해 주세요',
      hasError: true,
    }),
  },
};

export const Interactive: Story = {
  render: function InteractiveCvcField() {
    const field = useCvcField({});

    return <CvcField field={field} />;
  },
};
