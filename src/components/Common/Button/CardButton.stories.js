import React from 'react';
import CardButton from './CardButton';
export default {
  component: CardButton,
  title: 'CardButton',
};

const Template = args => <CardButton {...args} />;

export const DefaultCardButton = Template.bind({});

DefaultCardButton.args = {
  children: '+',
};
