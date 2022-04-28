import React from 'react';
import MoveButton from '../components/MoveButton';

export default {
  title: 'CardAddition/MoveButton',
  component: MoveButton,
};

const Template = (args) => <MoveButton {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '다음',
};

export const Activated = Template.bind({});
Activated.args = {
  disabled: false,
  children: '다음',
};
