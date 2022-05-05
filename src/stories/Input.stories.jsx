/* eslint-disable import/no-extraneous-dependencies */
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
  placeHolder: '밑줄이 있는 input도 가능해요.',
  underLine: true,
};

export const SizeControlledInput = Template.bind({});
UnderLinedInput.args = {
  width: 300,
  height: 100,
};
