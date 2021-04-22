import React from 'react';
import Input from '.';

export default {
  title: 'Form Inputs/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: '318px',
  label: '이름',
  type: 'text',
  placeholder: '이름을 입력하세요',
  textAlign: 'center',
  required: false,
  currentInputLength: 0,
  maxLength: 30,
  letterCounter: {
    current: 0,
    max: 30,
  },
};
