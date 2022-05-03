import React from 'react';
import Fieldset from './index';
import CardNumberInput from '../Input/CardNumberInput';
import ExpiredDateInput from '../Input/ExpiredDateInput';

export default {
  title: 'FieldSet',
  component: Fieldset,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Fieldset {...args} />;

export const CardNumberFieldSet = Template.bind({});

CardNumberFieldSet.args = {
  description: '카드 번호',
  children: <CardNumberInput />,
  errorMessage: '유효한 카드 번호가 아닙니다.',
};

export const ExpiredDateFieldSet = Template.bind({});

ExpiredDateFieldSet.args = {
  description: '만료 기한',
  children: <ExpiredDateInput />,
  errorMessage: '유효한 만료기간을 입력해주세요.',
};
