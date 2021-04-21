import React from 'react';
import InputContainer from './InputContainer';

export default {
  component: InputContainer,
  title: 'InputContainer',
};

const Template = (args) => <InputContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'TEST TITLE',
};

export const DefaultWidth = Template.bind({});
DefaultWidth.args = {
  title: 'TEST TITLE',
};

export const HalfWidth = Template.bind({});
HalfWidth.args = {
  title: 'TEST TITLE',
  width: 'w-1/2',
};
