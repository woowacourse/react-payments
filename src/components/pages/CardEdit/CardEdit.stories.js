/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardEdit from './index';

export default {
  title: 'pages/CardEdit',
  component: CardEdit,
};

const Template = (args) => <CardEdit {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardData: {
    bankId: '1p',
    cardNumbers: { 1: '1111', 2: '1234', 3: '4321', 4: '4444' },
    expirationDate: { month: '04', year: '21' },
    ownerName: 'COLLIN',
    cardAlias: '법카',
  },
  handleConfirmPage: () => {},
  cardId: 1,
};
