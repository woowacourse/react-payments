import React from 'react';
import SubmitButton from '.';

export default {
  title: 'Payment/Atoms/SubmitButton',
  component: SubmitButton,
};

const Template = args => <SubmitButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '다음',
};
