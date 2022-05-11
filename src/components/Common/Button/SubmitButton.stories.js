import React from 'react';
import SubmitButton from './SubmitButton';
export default {
  component: SubmitButton,
  title: 'SubmitButton',
};

const Template = args => <SubmitButton {...args} />;

export const DefaultSubmitButton = Template.bind({});

DefaultSubmitButton.args = {
  children: 'TEST',
};
