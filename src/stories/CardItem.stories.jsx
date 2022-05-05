import React from 'react';
import CardItem from '../components/CardItem';

export default {
  title: 'CardItem',
  component: CardItem,
};

const Template = args => <CardItem {...args} />;

export const SmallCard = Template.bind({});
SmallCard.args = {
  size: 'small',
  cardNumber: ['1234', '5678', '9012', '3456'],
  holderName: '카드 소유자 이름',
  expireDate: ['12', '23'],
  isComplete: true,
};

export const LargeCard = Template.bind({});
LargeCard.args = {
  size: 'large',
  cardNumber: ['1234', '5678', '9012', '3456'],
  holderName: '카드 소유자 이름',
  expireDate: ['12', '23'],
  isComplete: true,
};
