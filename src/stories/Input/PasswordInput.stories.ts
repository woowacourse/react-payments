import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { PasswordInput } from '../../components/input/PasswordInput';

const meta = {
  title: 'Example/Input',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    passwordInputRef: React.createRef(),
    activateNextButton: () => {},
    password: {
      firstPassword: '',
      secondPassword: '',
    },
    setPassword: () => {},
  },
};
