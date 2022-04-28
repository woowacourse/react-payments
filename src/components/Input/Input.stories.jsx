import React from 'react';
import Input from '.';
import '../../index.css';

export default {
  title: 'Payment/Input',
  component: Input,
  argTypes: {
    isCenter: { control: { type: 'boolean' } },
    backgroundColor: { control: { type: 'color' } },
    color: { control: { type: 'color' } },
    isValid: { control: { type: 'boolean' } },
  },
};

const Template = args => <Input {...args} />;

export const CardNumbers = Template.bind({});
export const Month = Template.bind({});
export const OwnerName = Template.bind({});
export const SecurityNumber = Template.bind({});
export const Password = Template.bind({});

CardNumbers.args = {
  type: 'text',
  width: '318px',
  maxLength: 19,
  placeholder: 'ex. 0000-0000-0000-0000',
  isValid: false,
};

Month.args = {
  type: 'text',
  placeholder: 'MM / YY',
  width: '137px',
  maxLength: 5,
  isValid: false,
};

OwnerName.args = {
  type: 'text',
  width: '318px',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  isCenter: false,
  maxLength: 30,
  isValid: false,
};

SecurityNumber.args = {
  type: 'password',
  width: '84px',
  isCenter: true,
  maxLength: 3,
  isValid: false,
};

Password.args = {
  type: 'password',
  width: '43px',
  isCenter: true,
  maxLength: 1,
  isValid: false,
};
