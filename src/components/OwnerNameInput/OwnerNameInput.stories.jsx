import React from 'react';
import OwnerNameInput from '.';
import useOwnerName from '../../hooks/useOwnerName';
import MESSAGE from '../../constant/message';

export default {
  title: 'Payment/OwnerNameInput',
  component: OwnerNameInput,
  argTypes: {
    ownerName: {
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
  },
};

export const Default = args => {
  const { ownerName, isValidOwnerName, handleChangeOwnerNameInput } = useOwnerName();

  return (
    <OwnerNameInput
      ownerName={ownerName}
      handleInputChange={handleChangeOwnerNameInput}
      isValid={isValidOwnerName}
      invalidMessage={MESSAGE.INVALID_OWNER_NAME}
      {...args}
    />
  );
};

Default.args = {
  width: '318px',
};
