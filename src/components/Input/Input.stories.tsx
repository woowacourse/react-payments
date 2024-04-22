import Input from './Input';
import { generateArgTypes } from '@utils/storybook/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자로부터 정보를 입력받기 위한 필드를 제공하는 컴포넌트',
      },
    },
  },
  argTypes: {
    placeholder: {
      ...generateArgTypes({ control: 'text' }),
      description: '입력 전 보여지는 text',
    },
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: '입력한 값',
    },
    onChange: {
      ...generateArgTypes({ control: 'function' }),
      description: '입력 시 동작하는 이벤트 핸들러',
    },
    isError: {
      ...generateArgTypes({ control: 'boolean' }),
      description: '에러 state',
    },
    maxLength: {
      ...generateArgTypes({ control: 'number', min: 4, max: 4, step: 0 }),
      description: '입력 가능한 최대 값',
    },
  },
  args: {
    placeholder: '1234',
    value: '',
    onChange: fn(),
    isError: false,
    maxLength: 4,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '기본 상태일 때의 Input' } },
  },
};

export const Error: Story = {
  parameters: {
    docs: { description: { story: '에러 상태일 때의 input' } },
  },
  args: {
    isError: true,
  },
};
