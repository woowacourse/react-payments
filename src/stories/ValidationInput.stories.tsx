import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ValidationInput from '../components/Common/ValidationInput';

const meta = {
  title: 'Components/ValidationInput',
  component: ValidationInput,
  tags: ['autodocs'],
  args: {
    validations: [],
  },
} satisfies Meta<typeof ValidationInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({
  initialValue,
  validations,
  placeholder,
}: {
  initialValue: string;
  validations: React.ComponentProps<typeof ValidationInput>['validations'];
  placeholder?: string;
}) {
  const [value, setValue] = useState(initialValue);
  return (
    <ValidationInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      validations={validations}
      placeholder={placeholder}
    />
  );
}

export const Empty: Story = {
  render: () => <Wrapper initialValue="" validations={[]} placeholder="입력해주세요" />,
};

export const Filled: Story = {
  render: () => <Wrapper initialValue="hello" validations={[]} />,
};

export const WithLimitValidation: Story = {
  name: 'With Limit Validation (숫자만 허용)',
  render: () => (
    <Wrapper
      initialValue=""
      placeholder="숫자만 입력"
      validations={[
        {
          type: 'validateOnChange',
          validator: (input) => /^\d*$/.test(input),
          message: '숫자만 입력 가능합니다.',
        },
        {
          type: 'validateOnChange',
          validator: (input) => input.length <= 4,
          message: '4자리까지만 입력 가능합니다.',
        },
      ]}
    />
  ),
};

export const WithCheckValidation: Story = {
  name: 'With Check Validation (blur 시 검사)',
  render: () => (
    <Wrapper
      initialValue=""
      placeholder="4자리 숫자"
      validations={[
        {
          type: 'validateOnChange',
          validator: (input) => /^\d*$/.test(input),
          message: '숫자만 입력 가능합니다.',
        },
        {
          type: 'validateOnBlur',
          validator: (input) => input.length === 4,
          message: '4자리를 입력해주세요.',
        },
      ]}
    />
  ),
};
