import React from 'react';
import { InputBasic } from './InputBasic';

export default {
  title: 'Example/InputBasic',
  component: InputBasic,
};

const Template = (args) => <InputBasic {...args} />;

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  type: 'text',
  placeholder: 'test holder',
};
