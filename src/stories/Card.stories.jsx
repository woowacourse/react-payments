import React from 'react';
import Card from '../components/Card';

export default {
  title: 'CardAddition/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  cardCompanyIndex: 0,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const JuneCard = Template.bind({});
JuneCard.args = {
  cardCompanyIndex: 1,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const GongOneCard = Template.bind({});
GongOneCard.args = {
  cardCompanyIndex: 2,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const BranCard = Template.bind({});
BranCard.args = {
  cardCompanyIndex: 3,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  cardCompanyIndex: 4,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const DobbyCard = Template.bind({});
DobbyCard.args = {
  cardCompanyIndex: 5,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const CollinCard = Template.bind({});
CollinCard.args = {
  cardCompanyIndex: 6,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};

export const SunCard = Template.bind({});
SunCard.args = {
  cardCompanyIndex: 7,
  cardNumber: ['1234', '5678', '4567', '7890'],
  cardOwner: '마르코',
  cardExpiration: ['05', '23'],
};
