import React from 'react';
import CardNumberInput from '.';

export default {
  title: 'Payment/Modules/CardNumberInput',
  component: CardNumberInput,
};

const Template = args => <CardNumberInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
