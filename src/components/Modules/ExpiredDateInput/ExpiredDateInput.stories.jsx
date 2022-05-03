import React from 'react';
import ExpiredDateInput from '.';

export default {
  title: 'Payment/ExpiredDateInput',
  component: ExpiredDateInput,
};

const Template = args => <ExpiredDateInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
