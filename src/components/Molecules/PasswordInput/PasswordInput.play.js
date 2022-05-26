import { expect } from '@storybook/jest';
import { userEvent } from '@storybook/testing-library';
import MESSAGE from 'constant/message';
import { CLASS } from 'constant/selector';

export const validInputCasePlay = async () => {
  // given
  const passwordInputs = Array.from(document.getElementsByClassName(CLASS.INPUT_PASSWORD));
  const INPUTTED_PASSWORD = ['1', '2'];

  // when
  passwordInputs.forEach(async (passwordInput, index) => {
    await userEvent.type(passwordInput, INPUTTED_PASSWORD[index]);
  });

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage).toBeUndefined();
};

export const emptyPasswordInputPlay = async () => {
  // given
  const passwordInput = document.getElementsByClassName(CLASS.INPUT_PASSWORD)[1];
  const INPUTTED_PASSWORD = '2';

  // when
  await userEvent.type(passwordInput, INPUTTED_PASSWORD);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe(MESSAGE.INVALID_PASSWORD);
};
