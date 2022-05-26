import { expect } from '@storybook/jest';
import { userEvent } from '@storybook/testing-library';
import MESSAGE from 'constant/message';
import { CLASS } from 'constant/selector';

export const validInputCasePlay = async () => {
  // given
  const securityNumberInput = document.getElementsByClassName(CLASS.INPUT_SECURITY_NUMBER)[0];
  const INPUTTED_SECURITY_NUMBER = '123';

  // when
  await userEvent.type(securityNumberInput, INPUTTED_SECURITY_NUMBER);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage).toBeUndefined();
};

export const notTypeThreeNumberPlay = async () => {
  // given
  const securityNumberInput = document.getElementsByClassName(CLASS.INPUT_SECURITY_NUMBER)[0];
  const INPUTTED_SECURITY_NUMBER = '12';

  // when
  await userEvent.type(securityNumberInput, INPUTTED_SECURITY_NUMBER);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe(MESSAGE.INVALID_SECURITY_NUMBER);
};
