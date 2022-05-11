import React from 'react';
import Card from '../system/Card';

export default {
  title: 'CardAddition/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

const makeArg = (cardComPanyName, color) => ({
  children: [
    cardComPanyName,
    ['1234', '5678', '4567', '7890'],
    '마르코',
    ['05', '23'],
  ],
  color,
});

export const PocoCard = Template.bind({});
PocoCard.args = makeArg('포코 카드', '#E24141');

export const JuneCard = Template.bind({});
JuneCard.args = makeArg('준 카드', '#547CE5');

export const GongOneCard = Template.bind({});
GongOneCard.args = makeArg('공원 카드', '#73BC6D');

export const BranCard = Template.bind({});
BranCard.args = makeArg('브랜 카드', '#DE59B9');

export const LoydCard = Template.bind({});
LoydCard.args = makeArg('로이드 카드', '#04C09E');

export const DobbyCard = Template.bind({});
DobbyCard.args = makeArg('도비 카드', '#E76E9A');

export const CollinCard = Template.bind({});
CollinCard.args = makeArg('콜린 카드', '#F37D3B');

export const SunCard = Template.bind({});
SunCard.args = makeArg('썬 카드', '#FBCD58');
