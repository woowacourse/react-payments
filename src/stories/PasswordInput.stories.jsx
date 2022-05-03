import React from 'react';
import PasswordInput from '../components/PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
};

const Template = (args) => <PasswordInput {...args} />;

export const SinglePasswordInput = Template.bind({});

SinglePasswordInput.args = {
  value: '1',
};
