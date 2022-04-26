import React from 'react';
import CardNumber from './CardNumber';

export default {
  title: 'CardAddition/CardNumber',
  component: CardNumber,
};

const Template = (args) => <CardNumber {...args} />;

export const CardExample = Template.bind({});
