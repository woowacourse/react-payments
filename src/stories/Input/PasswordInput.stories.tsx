import React, { useRef, useState } from 'react';

import type { Meta } from '@storybook/react';

import { PasswordInput } from '../../components/addCardForm/cardInfoInputs/PasswordInput';

const meta = {
  title: 'Example/Input',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;

export const Password = () => {
  const [password, setPassword] = useState(['', '']);

  return (
    <PasswordInput
      handleSubmitNewCardInfo={() => {}}
      password={password}
      setPassword={setPassword}
      focusPasswordInputByIndex={(index: number) => {}}
      viewPreviousInput={() => {}}
    />
  );
};
