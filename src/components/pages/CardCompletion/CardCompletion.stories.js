/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardCompletion from './index';

export default {
  title: 'pages/CardCompletion',
  component: CardCompletion,
};

const Template = (args) => <CardCompletion {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardData: {
    bankId: '1p',
    cardNumbers: { 1: '1111', 2: '1234', 3: '4321', 4: '4444' },
    expirationDate: { month: '04', year: '21' },
    ownerName: 'COLLIN',
  },
  handleMovePage: () => {},
};
