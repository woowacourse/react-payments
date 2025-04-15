import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/common/Input';
import { useState } from 'react';

const meta = {
  title: 'common/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    disabled: true,
    minLength: 0,
    maxLength: 10,
    placeholder: '값을 입력해주세요.',
    isValid: true,
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
  render: (args) => {
    // TODO : useInput 커스텀 훅
    const [value, setValue] = useState<number>(args.value ?? 0);
    return (
      <Input
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        disabled={args.disabled}
        minLength={args.minLength}
        maxLength={args.maxLength}
        placeholder={args.placeholder}
        isValid={args.isValid}
      />
    );
  },
};
