import React from 'react';
import ExpiredDateInput from '.';
import useExpiredDate from 'hooks/useExpiredDate';
import MESSAGE from 'constant/message';
import { validInputCasePlay, invalidDateInputCasePlay } from './ExpiredDataInput.play';

export default {
  title: 'Molecules/ExpiredDateInput',
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

ValidInputCase.play = validInputCasePlay;

export const InvalidDateInputCase = Template.bind({});

InvalidDateInputCase.play = invalidDateInputCasePlay;
