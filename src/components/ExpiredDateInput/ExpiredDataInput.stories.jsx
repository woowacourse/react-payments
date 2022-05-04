import React from 'react';
import ExpiredDateInput from '.';
import useExpiredDate from '../../hooks/useExpiredDate';
import MESSAGE from '../../constant/message';

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
  },
};

export const Default = args => {
  const { expiredDate, isValidExpiredDate, handleChangeExpiredDateInput } = useExpiredDate();

  return (
    <ExpiredDateInput
      expiredDate={expiredDate}
      handleInputChange={handleChangeExpiredDateInput}
      isValid={isValidExpiredDate}
      invalidMessage={MESSAGE.INVALID_EXPIRED_DATE}
      {...args}
    />
  );
};

Default.args = {
  width: '137px',
};
