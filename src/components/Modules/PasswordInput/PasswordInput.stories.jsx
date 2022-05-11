import React from 'react';
import PasswordInput from '.';

export default {
  title: 'Payment/Modules/PasswordInput',
  component: PasswordInput,
};

const Template = args => <PasswordInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
