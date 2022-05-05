import React from 'react';
import SecurityCodeInput from '../components/SecurityCodeInput';

export default {
  title: 'SecurityCodeInput',
  component: SecurityCodeInput,
};

const Template = (args) => <SecurityCodeInput {...args} />;

export const CardSecurityCodeInput = Template.bind({});

CardSecurityCodeInput.args = {
  value: '123',
  updateCard: () => {},
};
