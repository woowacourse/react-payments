import React from 'react';
import BaseButton from './BaseButton';
export default {
  component: BaseButton,
  title: 'BaseButton',
};

const Template = args => <BaseButton {...args} />;

export const DefaultBaseButton = Template.bind({});

DefaultBaseButton.args = {
  children: 'TEST',
};
