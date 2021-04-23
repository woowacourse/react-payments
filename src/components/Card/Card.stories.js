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
  cardNumbers: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [2, 2, 2, 2],
  ],
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
