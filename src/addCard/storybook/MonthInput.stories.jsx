import React from 'react';
import MonthInput from '../components/MonthInput';

export default {
  title: 'MonthInput',
  component: MonthInput,
};

const Template = (args) => <MonthInput {...args} />;

export const ExpiredMonthInput = Template.bind({});

ExpiredMonthInput.args = {
  value: '6',
};
