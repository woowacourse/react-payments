import React from 'react';
import SecurityCodeInput from '../components/SecurityCodeInput';

export default {
  title: 'SecurityCodeInput',
  component: SecurityCodeInput,
};

const Template = (args) => <SecurityCodeInput {...args} />;

export const SampleSecurityCodeInput = Template.bind({});

SampleSecurityCodeInput.args = {
  value: '123',
};
