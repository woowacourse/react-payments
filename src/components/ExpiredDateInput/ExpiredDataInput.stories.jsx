import React from 'react';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import ExpiredDateInput from '.';
import useExpiredDate from '../../hooks/useExpiredDate';
import { PLACEHOLDER } from 'constant';
import MESSAGE from '../../constant/message';
import { CLASS } from 'constant/selector';

export default {
  title: 'Payment/ExpiredDateInput',
  component: ExpiredDateInput,
  argTypes: {
    expiredDate: {
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
    width: { defaultValue: '137px', control: { type: 'text' } },
  },
};

const Template = args => {
  const { expiredDate, isValidExpiredDate, handleChangeExpiredDateInput } = useExpiredDate();

  return (
    <ExpiredDateInput
      expiredDate={expiredDate}
      handleInputChange={handleChangeExpiredDateInput}
      isValid={isValidExpiredDate}
      invalidMessage={MESSAGE.INVALID_EXPIRED_DATE}
      width={'137px'}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const ValidInputCase = Template.bind({});

ValidInputCase.play = async ({ canvasElement }) => {
  // given
  const canvas = within(canvasElement);
  const monthInput = canvas.getByPlaceholderText(PLACEHOLDER.MONTH);
  const yearInput = canvas.getByPlaceholderText(PLACEHOLDER.YEAR);

  const INPUTTED_MONTH = '12';
  const INPUTTED_YEAR = '22';

  const EXPECTED_BLANK_MESSAGE = '';

  // when
  await userEvent.type(monthInput, INPUTTED_MONTH);
  await userEvent.type(yearInput, INPUTTED_YEAR);

  // then
  const invalidMessage = document.getElementsByClassName(CLASS.INVALID_INPUT_MESSAGE)[0];

  await expect(invalidMessage.textContent).toBe(EXPECTED_BLANK_MESSAGE);
};

export const InvalidDateInputCase = Template.bind({});

InvalidDateInputCase.play = async ({ canvasElement }) => {
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
