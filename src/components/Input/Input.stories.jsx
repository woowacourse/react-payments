import React from 'react';
import Input from '.';
import '../../index.css';

export default {
  title: 'Payment/Input',
  component: Input,
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
export const Month = Template.bind({});
export const OwnerName = Template.bind({});
export const SecurityNumber = Template.bind({});
export const Password = Template.bind({});

Default.args = {
  type: 'text',
  width: '318px',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
};

Month.args = {
  type: 'text',
  placeholder: 'MM / YY',
  width: '137px',
  isCenter: true,
  maxLength: 5,
};

OwnerName.args = {
  type: 'text',
  width: '318px',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  isCenter: false,
  maxLength: 30,
};

SecurityNumber.args = {
  type: 'password',
  width: '84px',
  isCenter: true,
  maxLength: 3,
};

Password.args = {
  type: 'password',
  width: '43px',
  isCenter: true,
  maxLength: 1,
};
