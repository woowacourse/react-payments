import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const Default = Template.bind({});
Default.args = {
  add: false,
  cardInfos: {
    cardName: '포코카드',
    numbers: '1111-2222-3333-4444',
    user: 'SUN',
    expireDate: '04/21',
  },
};
