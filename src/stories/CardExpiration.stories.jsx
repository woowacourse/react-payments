import React from 'react';
import CardExpiration from '../components/CardExpiration';

export default {
  title: 'CardAddition/CardExpiration',
  component: CardExpiration,
};

const Template = (args) => <CardExpiration {...args} />;

export const CardExample = Template.bind({});
