import React from 'react';
import Input from '../components/Input.jsx';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const CardNumberInput = Template.bind({});

CardNumberInput.args = {
  length: 4,
  updateNameLength: () => {},
};

export const ExpireDateInput = Template.bind({});

ExpireDateInput.args = {
  placeholder: 'MM',
  length: 2,
  updateNameLength: () => {},
};

export const OwnerNameInput = Template.bind({});

OwnerNameInput.args = {
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  length: 30,
  minLength: 2,
  updateNameLength: () => {},
};

export const SecurityCodeInput = Template.bind({});

SecurityCodeInput.args = {
  size: 'w-25',
  type: 'password',
  length: 1,
  updateNameLength: () => {},
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  size: 'w-15',
  type: 'password',
  length: 1,
  updateNameLength: () => {},
};
