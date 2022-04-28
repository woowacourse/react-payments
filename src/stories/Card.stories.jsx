import React from 'react';
import Card from '../components/Card';

export default {
  title: 'CardAddition/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  cardName: '포코 카드',
  color: '#E24141',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const JuneCard = Template.bind({});
JuneCard.args = {
  cardName: '준 카드',
  color: '#547CE4',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const GongOneCard = Template.bind({});
GongOneCard.args = {
  cardName: '공원 카드',
  color: '#73BC6D',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const BranCard = Template.bind({});
BranCard.args = {
  cardName: '브랜 카드',
  color: '#DE59B9',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  cardName: '로이드 카드',
  color: '#04C09E',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const DobbyCard = Template.bind({});
DobbyCard.args = {
  cardName: '도비 카드',
  color: '#E76E9A',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const CollinCard = Template.bind({});
CollinCard.args = {
  cardName: '콜린 카드',
  color: '#F37D3B',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const SunCard = Template.bind({});
SunCard.args = {
  cardName: '썬 카드',
  color: '#FBCD58',
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};
