import React from 'react';
import CardNameInput from './CardNameInput';

export default {
  component: CardNameInput,
  title: 'Items/CardNameInput',
};

const Template = (args) => <CardNameInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
