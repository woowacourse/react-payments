import { useState } from 'react';

import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/common/Input';

const meta = {
  title: 'common/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '입력 필드 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    minLength: 0,
    maxLength: 10,
    placeholder: '값을 입력해주세요.',
    isValid: true,
  },
  argTypes: {
    value: {
      control: false,
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string>(args.value ?? '');
    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={args.disabled}
        minLength={args.minLength}
        maxLength={args.maxLength}
        placeholder={args.placeholder}
        isValid={args.isValid}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    isValid: true,
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const isInValid: Story = {
  args: {
    disabled: false,
    isValid: false,
  },
  render: (args) => {
    return (
      <Input
        {...args}
        css={css`
          cursor: not-allowed;
        `}
      />
    );
  },
};
