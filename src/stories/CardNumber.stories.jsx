import React from 'react';
import CardNumber from '../components/CardNumber';

export default {
  title: 'CardAddition/CardNumber',
  component: CardNumber,
};

const Template = (args) => <CardNumber {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#04C09E',
};
