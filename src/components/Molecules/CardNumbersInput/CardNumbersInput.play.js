import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { PLACEHOLDER } from 'constant';

export const validInputCasePlay = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);
  const cardNumberInputs = canvas.getAllByPlaceholderText(PLACEHOLDER.CARD_NUMBERS);

  const INPUTTED_VALUES = ['1111', '2222', '3333', '4444'];
  const EXPECTED_LENGTH = 4;

  // when
  await cardNumberInputs.forEach(async (cardNumberInput, index) => {
    await userEvent.click(cardNumberInput);
    await userEvent.type(cardNumberInput, INPUTTED_VALUES[index]);
  });

  // then
  cardNumberInputs.forEach(async cardNumberInput => {
    await expect(cardNumberInput.value.length).toBe(EXPECTED_LENGTH);
  });
};

export const notNumberInputCasePlay = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);
  const cardNumberInputs = canvas.getAllByPlaceholderText(PLACEHOLDER.CARD_NUMBERS);

  const INPUTTED_VALUES = ['1111', '22ab', '3333', '4444'];
  const EXPECTED_VALID_INPUT_LENGTH = 4;
  const EXPECTED_INVALID_INPUT_LENGTH = 2;

  // when
  await cardNumberInputs.forEach(async (cardNumberInput, index) => {
    await userEvent.click(cardNumberInput);
    await userEvent.type(cardNumberInput, INPUTTED_VALUES[index]);
  });

  // then
  cardNumberInputs.forEach(async (cardNumberInput, index) => {
    if (index === 1) {
      await expect(cardNumberInput.value.length).toBe(EXPECTED_INVALID_INPUT_LENGTH);
      return;
    }
    await expect(cardNumberInput.value.length).toBe(EXPECTED_VALID_INPUT_LENGTH);
  });
};
