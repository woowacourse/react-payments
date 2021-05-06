/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SecureCodeInput from './index';
import INPUT_TYPE from '../../../constants/constants';

export default {
  title: 'units/SecureCodeInput',
  component: SecureCodeInput,
};

const Template = (args) => <SecureCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...INPUT_TYPE.SECURE_CODE,
  secureCode: '',
  setSecureCode: () => {},
};
