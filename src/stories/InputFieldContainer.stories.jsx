import React from 'react';
import InputFieldContainer from '../components/common/InputFieldContainer';

export default {
  title: 'InputFieldContainer',
  component: InputFieldContainer,
};

const Template = (args) => <InputFieldContainer {...args} />;

export const DefaultInputFieldContainer = Template.bind({});
DefaultInputFieldContainer.args = {
  children: <input className="input-basic" />,
};

export const PasswordInputFieldContainer = Template.bind({});
PasswordInputFieldContainer.args = {
  children: <input type="password" className="input-basic password" />,
};
