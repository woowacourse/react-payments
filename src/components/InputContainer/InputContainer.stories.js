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
