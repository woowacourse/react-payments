import React from 'react';
import SecurityNumberInput from '.';
import useSecurityNumber from 'hooks/useSecurityNumber';
import MESSAGE from 'constant/message';
import { validInputCasePlay, notTypeThreeNumberPlay } from './SecurityNumberInput.play';

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

ValidInputCase.play = validInputCasePlay;

export const NotTypeThreeNumber = Template.bind({});

NotTypeThreeNumber.play = notTypeThreeNumberPlay;
