import React from 'react';
import Fieldset from './index';
import CardNumberInput from '../Input/CardNumberInput';

export default {
  title: 'FieldSet',
  component: Fieldset,
};

const Template = args => <Fieldset {...args} />;

export const Example = Template.bind({});

Example.args = {
  id: 'cardNumber',
  description: '카드 번호',
  children: <CardNumberInput />,
  errorMessage: '유효한 카드 번호가 아닙니다.',
};
