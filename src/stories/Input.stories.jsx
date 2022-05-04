import React from 'react';
import Input from '../components/common/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  name: 'default-input',
  type: 'text',
};
