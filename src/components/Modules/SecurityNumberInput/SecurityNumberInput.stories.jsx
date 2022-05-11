import React from 'react';
import SecurityNumberInput from '.';

export default {
  title: 'Payment/Modules/SecurityNumberInput',
  component: SecurityNumberInput,
};

const Template = args => <SecurityNumberInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
