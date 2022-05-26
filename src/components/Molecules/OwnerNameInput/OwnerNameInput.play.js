import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { PLACEHOLDER } from 'constant';
import MESSAGE from 'constant/message';
import { CLASS } from 'constant/selector';

export const validInputCasePlay = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);
  const ownerNameInput = canvas.getByPlaceholderText(PLACEHOLDER.OWNER_NAME);

  const INPUTTED_OWNER_NAME = 'VICTOR';

  // when
  await userEvent.type(ownerNameInput, INPUTTED_OWNER_NAME);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage).toBeUndefined();
};

export const noBlankOwnerNamePlay = async ({ canvasElement }) => {
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
