import React from 'react';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import CardNumbersInput from '.';
import useCardNumbers from '../../../hooks/useCardNumbers';
import { PLACEHOLDER } from 'constant';
import MESSAGE from '../../../constant/message';

export default {
  title: 'Molecules/CardNumbersInput',
  component: CardNumbersInput,
  argTypes: {
    cardNumbers: {
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
  const { cardNumbers, isValidCardNumbers, handleChangeCardNumbersInput } = useCardNumbers();

  return (
    <CardNumbersInput
      cardNumbers={cardNumbers}
      handleInputChange={handleChangeCardNumbersInput}
      isValid={isValidCardNumbers}
      invalidMessage={MESSAGE.INVALID_CARD_NUMBER}
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

export const NotNumberInputCase = Template.bind({});

NotNumberInputCase.play = async ({ canvasElement }) => {
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
