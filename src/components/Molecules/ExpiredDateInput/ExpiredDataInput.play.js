import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { PLACEHOLDER } from 'constant';
import MESSAGE from 'constant/message';
import { CLASS } from 'constant/selector';

export const validInputCasePlay = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);

  const monthInput = canvas.getByPlaceholderText(PLACEHOLDER.MONTH);
  const yearInput = canvas.getByPlaceholderText(PLACEHOLDER.YEAR);

  const INPUTTED_MONTH = '12';
  const INPUTTED_YEAR = '22';

  // when
  await userEvent.type(monthInput, INPUTTED_MONTH);
  await userEvent.type(yearInput, INPUTTED_YEAR);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage).toBeUndefined();
};

export const invalidDateInputCasePlay = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);
  const monthInput = canvas.getByPlaceholderText(PLACEHOLDER.MONTH);
  const yearInput = canvas.getByPlaceholderText(PLACEHOLDER.YEAR);

  const INPUTTED_MONTH = '12';
  const INPUTTED_YEAR = '20';

  // when
  await userEvent.type(monthInput, INPUTTED_MONTH);
  await userEvent.type(yearInput, INPUTTED_YEAR);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];
  await expect(invalidMessage.textContent).toBe(MESSAGE.INVALID_EXPIRED_DATE);
};
