import Card from './Card';
import React from 'react';

export default {
  title: 'CardAddition/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardExample = Template.bind({});
CardExample.args = {
  cardName: '클린카드',
  cardNumber: '0000-1111-2222-3333',
  cardOwner: 'HONG GIL DONG',
  cardExpirationDate: '05 / 12',
};
