import React from 'react';
import SubmitButton from '.';
import MESSAGE from '../../constant/message';

MESSAGE.TOOLTIP_SECURITY_NUMBER;

export default {
  title: 'Payment/SubmitButton',
  component: SubmitButton,
};

export const CardAddSubmitButton = args => {
  return <SubmitButton label="다음" width={'51px'} height={'34px'} hidden={false} {...args} />;
};
