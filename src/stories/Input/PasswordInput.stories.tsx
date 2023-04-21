import React, { useRef, useState } from 'react';

import type { Meta } from '@storybook/react';

import { PasswordInput } from '../../components/input/PasswordInput';

const meta = {
  title: 'Example/Input',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;

export const Password = () => {
  const passwordInputRef = useRef(null);
  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  });

  return (
    <PasswordInput
      passwordInputRef={passwordInputRef}
      activateNextButton={() => {}}
      password={password}
      setPassword={setPassword}
      moveFocusToSecurityCode={() => {}}
    />
  );
};
