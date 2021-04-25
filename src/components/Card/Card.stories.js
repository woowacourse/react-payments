import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers: {
    0: '1234',
    1: '1234',
    2: '1234',
    3: '1234',
  },
  cardCompany: {
    name: '로이드카드',
  },
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
