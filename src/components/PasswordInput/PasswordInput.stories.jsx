import React from 'react';
import PasswordInput from '.';
import usePassword from '../../hooks/usePassword';
import MESSAGE from '../../constant/message';

export default {
  title: 'Payment/PasswordInput',
  component: PasswordInput,
  argTypes: {
    password: {
      table: {
        disable: true,
      },
    },
    handleInputChange: {
      table: {
        disable: true,
      },
    },
    isValid: {
      table: {
        disable: true,
      },
    },
    invalidMessage: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  const { password, isValidPassword, handleChangePassword } = usePassword();

  return (
    <PasswordInput
      password={password}
      handleInputChange={handleChangePassword}
      isValid={isValidPassword}
      invalidMessage={MESSAGE.INVALID_PASSWORD}
      {...args}
    />
  );
};
