import React from 'react';
import PasswordInput from '.';

export default {
  title: 'Page/AddCard/PasswordInput',
  component: PasswordInput,
};

const Template = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  password: { first: 9, second: 1 },
  setPassword: () => {},
};
