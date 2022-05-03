import React from 'react';
import CardNumberInput from '.';

export default {
  title: 'Payment/CardNumberInput',
  component: CardNumberInput,
};

const Template = args => <CardNumberInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
