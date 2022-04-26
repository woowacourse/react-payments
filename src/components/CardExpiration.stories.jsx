import React from 'react';
import CardExpiration from './CardExpiration';

export default {
  title: 'CardAddition/CardExpiration',
  component: CardExpiration,
};

const Template = (args) => <CardExpiration {...args} />;

export const CardExample = Template.bind({});
