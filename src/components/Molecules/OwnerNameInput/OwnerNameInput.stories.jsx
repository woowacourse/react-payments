import React from 'react';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import OwnerNameInput from '.';
import useOwnerName from '../../../hooks/useOwnerName';
import { PLACEHOLDER } from 'constant';
import MESSAGE from '../../../constant/message';
import { CLASS } from 'constant/selector';

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

ValidInputCase.play = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);
  const ownerNameInput = canvas.getByPlaceholderText(PLACEHOLDER.OWNER_NAME);

  const INPUTTED_OWNER_NAME = 'VICTOR';

  const EXPECTED_BLANK_MESSAGE = '';

  // when
  await userEvent.type(ownerNameInput, INPUTTED_OWNER_NAME);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe(EXPECTED_BLANK_MESSAGE);
};

export const NoBlankOwnerName = Template.bind({});

NoBlankOwnerName.play = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);
  const ownerNameInput = canvas.getByPlaceholderText(PLACEHOLDER.OWNER_NAME);

  const INPUTTED_OWNER_NAME = '   ';

  // when
  await userEvent.type(ownerNameInput, INPUTTED_OWNER_NAME);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe(MESSAGE.INVALID_OWNER_NAME);
};
