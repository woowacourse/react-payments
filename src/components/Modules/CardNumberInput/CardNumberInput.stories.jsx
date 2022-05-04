import React from 'react';
import CardNumberInput from '.';
import validator from '../../../validation';

export default {
  title: 'Payment/CardNumberInput',
  component: CardNumberInput,
};

const Template = args => <CardNumberInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  // numbers,
  // validations: validator.validateCardNumber,
  // inputRefs,
  // handleNumberChange,
};
