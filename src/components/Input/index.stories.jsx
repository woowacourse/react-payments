import React from 'react';
import Input from './index';
import CardNumberInput from './CardNumberInput';
import ExpiredDateInput from './ExpiredDateInput';

export default {
  title: 'Input',
  component: Input,

  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    maxLength: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Input {...args} />;
const CardNumberTemplate = (args) => <CardNumberInput {...args} />;
const ExpiredDateTemplate = (args) => <ExpiredDateInput {...args} />;

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

export const ExpiredDate = ExpiredDateTemplate.bind({});
