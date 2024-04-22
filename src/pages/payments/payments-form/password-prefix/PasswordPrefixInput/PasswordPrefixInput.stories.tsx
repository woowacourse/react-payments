import { generateArgTypes } from '@utils/storybook/generateArgTypes';
import PasswordPrefixInput from './PasswordPrefixInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/PaymentsForm/PasswordPrefix/PasswordPrefixInput',
  component: PasswordPrefixInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 id',
    },
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 값',
    },
    isError: {
      ...generateArgTypes({ control: 'boolean' }),
      description: 'input의 에러 여부',
    },
    onAddPasswordPrefix: {
      ...generateArgTypes({ control: 'object' }),
      description: 'PasswordPrefixInput의 이벤트 핸들러',
    },
  },
  args: {
    id: '',
    value: '',
    isError: false,
    onAddPasswordPrefix: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordPrefixInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '기본 상태' } },
  },
};

export const Error: Story = {
  parameters: {
    docs: { description: { story: '에러가 발생한 상태' } },
  },
  args: {
    isError: true,
  },
};
