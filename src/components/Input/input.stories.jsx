import React from 'react';
import Input from './index';
import CardNumberInput from './CardNumberInput';
import ExpiredDateInput from './ExpiredDateInput';
import CardNickNameInput from './CardNickNameInput';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;
const CardNumberTemplate = (args) => <CardNumberInput {...args} />;
const ExpiredDateTemplate = (args) => <ExpiredDateInput {...args} />;
const CardNickNameTemplate = (args) => <CardNickNameInput />;

export const Password = Template.bind({});

Password.args = {
  scale: 'small',
  type: 'password',
  maxLength: 1,
};

export const UserName = Template.bind({});

UserName.args = {
  scale: 'large',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
};

export const CardNumber = CardNumberTemplate.bind({});
CardNumber.args = {
  cardNumbers: ['1111', '1111', '1111', '1111'],
};

export const ExpiredDate = ExpiredDateTemplate.bind({});
ExpiredDate.args = {
  expiredMonth: '07',
  expiredYear: '24',
};

export const CardNickName = CardNickNameTemplate.bind({});
