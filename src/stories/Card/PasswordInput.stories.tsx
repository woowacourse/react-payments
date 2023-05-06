import type { Meta, StoryFn } from '@storybook/react';
import { PasswordInput } from 'components/Input';
import { useRef, useState } from 'react';

const meta = {
  title: 'Payments/Card/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryFn<typeof meta>;

export const Password: Story = () => {
  const passwordInputRef = useRef(null);
  const [password, setPassword] = useState(['', '']);

  return (
    <PasswordInput
      passwordInputRef={passwordInputRef}
      password={password}
      setPassword={setPassword}
    />
  );
};
