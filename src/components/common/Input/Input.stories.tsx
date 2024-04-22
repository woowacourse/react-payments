import { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: 'text',
    isError: false,
    placeholder: '텍스트를 입력하세요',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    isError: false,
    placeholder: '숫자를 입력하세요',
  },
};

export const Error: Story = {
  args: {
    isError: true,
    value: '에러',
  },
};
