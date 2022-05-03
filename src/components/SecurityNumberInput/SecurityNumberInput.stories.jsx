import React from 'react';
import SecurityNumberInput from '.';
import useSecurityNumber from '../../hooks/useSecurityNumber';
import MESSAGE from '../../constant/message';

export default {
  title: 'Payment/SecurityNumberInput',
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

export const Default = args => {
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
