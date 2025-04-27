import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

// 공통 기본 설정
const baseArgs = {
  placeholder: '1234',
  maxLength: 4
};

// "빈 값" 스토리
export const EmptyInput: Story = {
  args: {
    ...baseArgs,
    value: '',
    isError: false,
    onChange: action('onChange')
  }
};

// "정상 입력" 스토리
export const ValidInput: Story = {
  args: {
    ...baseArgs,
    value: '1234',
    isError: false,
    onChange: action('onChange')
  }
};

// "에러 입력" 스토리
export const InvalidInput: Story = {
  args: {
    ...baseArgs,
    value: 'abcd',
    isError: true,
    onChange: action('onChange')
  }
};

export const InteractiveInput: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        isError={value.length > 0 && !/^\d+$/.test(value)}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange?.(e);
        }}
      />
    );
  }
};
export const FocusedInput: Story = {
  args: {
    value: '',
    placeholder: '1234',
    isError: false,
    maxLength: 4
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement;
    input.focus();
  }
};
