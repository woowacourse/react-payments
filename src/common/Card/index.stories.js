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
  add: true,
  cardInfos: null,
};

export const CardWithInfos = Template.bind({});
CardWithInfos.args = {
  add: false,
  cardInfos: {
    cardName: '포코',
    numbers: '1111-2222-3333-4444',
    user: 'SUN',
    expireDate: '04/21',
  },
};

export const CardWithAnotherInfos = Template.bind({});
CardWithAnotherInfos.args = {
  cardInfos: {
    ...CardWithInfos.args.cardInfos,
    cardName: '로이드',
  },
};
