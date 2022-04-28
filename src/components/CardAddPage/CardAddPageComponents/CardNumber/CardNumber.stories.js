import React from 'react';
import CardNumber from './CardNumber';

export default {
  title: 'CardNumber',
  component: CardNumber,
};

const Template = (args) => <CardNumber {...args} />;

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  cardInfo: {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  },
};
