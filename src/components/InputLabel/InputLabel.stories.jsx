import React from 'react';
import InputLabel from '.';
import '../../index.css';

export default {
  title: 'Payment/InputLabel',
  component: InputLabel,
};

const Template = args => <InputLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: '카드 번호',
};
