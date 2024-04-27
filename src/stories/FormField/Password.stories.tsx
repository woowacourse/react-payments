import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Password from '../../components/FormField/Password';

const meta = {
  title: 'FormField_비밀번호',
  component: Password,
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    passwordState: '',
    setPasswordState: fn(),
    isPasswordError: false,
  },
};

export const 정상입력: Story = {
  args: {
    passwordState: '12',
    setPasswordState: fn(),
    isPasswordError: false,
  },
};

export const 잘못된_문자를_입력했을_때: Story = {
  args: {
    passwordState: '쿠키',
    setPasswordState: fn(),
    isPasswordError: true,
  },
};

export const 두_자리_숫자_입력이_아닐_때: Story = {
  args: {
    passwordState: '1',
    setPasswordState: fn(),
    isPasswordError: true,
  },
};
