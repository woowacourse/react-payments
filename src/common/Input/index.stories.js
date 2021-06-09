import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const Template = (args) => <Input {...args} value='테스트' />;

export const Default = Template.bind({});

export const SmallWidth = Template.bind({});
SmallWidth.args = {
  width: '2.6875rem',
};

export const TextLeft = Template.bind({});
TextLeft.args = {
  textAlign: 'left',
};

export const NickNameInput = Template.bind({});
NickNameInput.args = {
  nickNameInput: true,
};

export const RoundInput = Template.bind({});
RoundInput.args = {
  roundInput: true,
};
