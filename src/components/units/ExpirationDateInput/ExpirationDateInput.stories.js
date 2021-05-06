/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ExpirationDateInput from './index';
import INPUT_TYPE from '../../../constants/constants';

export default {
  title: 'units/ExpirationDateInput',
  component: ExpirationDateInput,
};

const Template = (args) => <ExpirationDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...INPUT_TYPE.EXPIRATION_DATE,
  expirationDate: { month: '04', year: '21' },
  setExpirationDate: () => {},
};
