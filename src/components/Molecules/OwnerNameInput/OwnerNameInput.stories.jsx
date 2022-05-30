import React from 'react';
import OwnerNameInput from '.';
import useOwnerName from 'hooks/useOwnerName';
import MESSAGE from 'constant/message';
import { validInputCasePlay, noBlankOwnerNamePlay } from './OwnerNameInput.play';

export default {
  title: 'Molecules/OwnerNameInput',
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
    width: { defaultValue: '318px', control: { type: 'text' } },
  },
};

const Template = args => {
  const { ownerName, isValidOwnerName, handleChangeOwnerNameInput } = useOwnerName();

  return (
    <OwnerNameInput
      ownerName={ownerName}
      handleInputChange={handleChangeOwnerNameInput}
      isValid={isValidOwnerName}
      invalidMessage={MESSAGE.INVALID_OWNER_NAME}
      width={'318px'}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const ValidInputCase = Template.bind({});

ValidInputCase.play = validInputCasePlay;

export const NoBlankOwnerName = Template.bind({});

NoBlankOwnerName.play = noBlankOwnerNamePlay;
