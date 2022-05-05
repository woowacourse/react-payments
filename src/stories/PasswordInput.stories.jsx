import React from 'react';
import PasswordInput from '../components/PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
};

const Template = (args) => <PasswordInput {...args} />;

export const CardPasswordInput = Template.bind({});

CardPasswordInput.args = {
  value: '1',
  updateCard: () => {},
};
