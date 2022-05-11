import React from 'react';
import YearInput from '../components/YearInput';

export default {
  title: 'YearInput',
  component: YearInput,
};

const Template = (args) => <YearInput {...args} />;

export const ExpiredYearInput = Template.bind({});

ExpiredYearInput.args = {
  value: '24',
};
