import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import PasswordField from '../../../../../feature/CardRegister/components/InfoInputSection/PasswordField';

const meta = {
  title: 'feature/CardRegister/components/PasswordField',
  component: PasswordField,
  tags: ['autodocs'],
  args: {
    password: '',
    handlePasswordNumberChange: fn(),
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    password: '12',
    handlePasswordNumberChange: fn(),
  },
};

export const Interactive: Story = {
  args: {
    password: '',
    handlePasswordNumberChange: fn(),
  },
  render: function InteractivePasswordField(args) {
    const [password, setPassword] = useState(args.password);

    return (
      <PasswordField
        {...args}
        password={password}
        handlePasswordNumberChange={setPassword}
      />
    );
  },
};
