import React from 'react';
import Card from '../components/Card';

export default {
  title: 'CardAddition/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

const cardObject = (cardName, color) => ({
  cardName,
  color,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
});

export const PocoCard = Template.bind({});
PocoCard.args = cardObject('포코 카드', '#E24141');

export const JuneCard = Template.bind({});
JuneCard.args = cardObject('준 카드', '#547CE4');

export const GongOneCard = Template.bind({});
GongOneCard.args = cardObject('공원 카드', '#73BC6D');

export const BranCard = Template.bind({});
BranCard.args = cardObject('브랜 카드', '#DE59B9');

export const LoydCard = Template.bind({});
LoydCard.args = cardObject('로이드 카드', '#04C09E');

export const DobbyCard = Template.bind({});
DobbyCard.args = cardObject('도비 카드', '#E76E9A');

export const CollinCard = Template.bind({});
CollinCard.args = cardObject('콜린 카드', '#F37D3B');

export const SunCard = Template.bind({});
SunCard.args = cardObject('썬 카드', '#FBCD58');
