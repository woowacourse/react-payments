import React from 'react';
import { expect } from '@storybook/jest';
import { userEvent } from '@storybook/testing-library';
import PasswordInput from '.';
import usePassword from '../../../hooks/usePassword';
import MESSAGE from '../../../constant/message';
import { CLASS } from 'constant/selector';

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

ValidInputCase.play = async () => {
  // given
  const passwordInputs = Array.from(document.getElementsByClassName(CLASS.INPUT_PASSWORD));
  const INPUTTED_PASSWORD = ['1', '2'];

  // when
  passwordInputs.forEach(async (passwordInput, index) => {
    await userEvent.type(passwordInput, INPUTTED_PASSWORD[index]);
  });

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe('');
};

export const EmptyPasswordInput = Template.bind({});

EmptyPasswordInput.play = async () => {
  // given
  const passwordInput = document.getElementsByClassName(CLASS.INPUT_PASSWORD)[1];
  const INPUTTED_PASSWORD = '2';

  // when
  await userEvent.type(passwordInput, INPUTTED_PASSWORD);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe(MESSAGE.INVALID_PASSWORD);
};
