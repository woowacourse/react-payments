/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SecureCodeInput from './index';

export default {
  title: 'units/SecureCodeInput',
  component: SecureCodeInput,
};

const Template = (args) => <SecureCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  secureCode: '',
};
