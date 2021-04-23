import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'NAME',
  bank: '로이드카드',
  cardNumbers: ['1234123412341234'],
  expiration: '4/30',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  ...Default.args,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  ...Default.args,
};
