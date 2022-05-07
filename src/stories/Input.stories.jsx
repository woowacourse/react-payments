import React from 'react';
import Input from '../components/common/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {};

export const UnderLinedInput = Template.bind({});
UnderLinedInput.args = {
  placeHolder: 'underlined input',
  underLine: true,
};

export const SizeControlledInput = Template.bind({});
SizeControlledInput.args = {
  width: 300,
  height: 100,
};
