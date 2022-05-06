import React from 'react';
import Button from '../components/Button';

export default {
  title: 'CardAddition/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '다음',
};

export const Activated = Template.bind({});
Activated.args = {
  color: '#04C09E',
  disabled: false,
  children: '다음',
};
