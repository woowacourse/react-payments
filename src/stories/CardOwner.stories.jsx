import React from 'react';
import CardOwner from '../components/CardOwner';

export default {
  title: 'CardAddition/CardOwner',
  component: CardOwner,
};

const Template = (args) => <CardOwner {...args} />;

export const CardExample = Template.bind({});
