import React from 'react';
import PasswordInput from '.';
import usePassword from 'hooks/usePassword';
import MESSAGE from 'constant/message';
import { validInputCasePlay, emptyPasswordInputPlay } from './PasswordInput.play';

export default {
  title: 'Molecules/PasswordInput',
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

const Template = args => {
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

export const Default = Template.bind({});

export const ValidInputCase = Template.bind({});

ValidInputCase.play = validInputCasePlay;

export const EmptyPasswordInput = Template.bind({});

EmptyPasswordInput.play = emptyPasswordInputPlay;
