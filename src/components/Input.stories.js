import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Basic',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  placeholder: 'NumberInput',
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  placeholder: 'TextInput',
};
