import React from 'react';
import { expect } from '@storybook/jest';
import { userEvent } from '@storybook/testing-library';
import SecurityNumberInput from '.';
import useSecurityNumber from '../../../hooks/useSecurityNumber';
import MESSAGE from '../../../constant/message';
import { CLASS } from 'constant/selector';

export default {
  title: 'Molecules/SecurityNumberInput',
  component: SecurityNumberInput,
  argTypes: {
    securityNumber: {
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
  const { securityNumber, isValidSecurityNumber, handleChangeSecurityNumber } = useSecurityNumber();

  return (
    <SecurityNumberInput
      securityNumber={securityNumber}
      handleInputChange={handleChangeSecurityNumber}
      isValid={isValidSecurityNumber}
      invalidMessage={MESSAGE.INVALID_SECURITY_NUMBER}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const ValidInputCase = Template.bind({});

ValidInputCase.play = async () => {
  // given
  const securityNumberInput = document.getElementsByClassName(CLASS.INPUT_SECURITY_NUMBER)[0];
  const INPUTTED_SECURITY_NUMBER = '123';

  // when
  await userEvent.type(securityNumberInput, INPUTTED_SECURITY_NUMBER);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe('');
};

export const NotTypeThreeNumber = Template.bind({});

NotTypeThreeNumber.play = async () => {
  // given
  const securityNumberInput = document.getElementsByClassName(CLASS.INPUT_SECURITY_NUMBER)[0];
  const INPUTTED_SECURITY_NUMBER = '12';

  // when
  await userEvent.type(securityNumberInput, INPUTTED_SECURITY_NUMBER);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe(MESSAGE.INVALID_SECURITY_NUMBER);
};
