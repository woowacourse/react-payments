import React from 'react';
import Card from './Card';
import { CardContext } from '../../context';
import { DEFAULT_CARD_INFO } from '../../constants';

export default {
  component: Card,
  title: 'Card',
};

const cardState = {
  cardInput: DEFAULT_CARD_INFO,
};

const Template = args => (
  <CardContext.Provider value={cardState}>
    <Card {...args} />;
  </CardContext.Provider>
);

export const smallCard = Template.bind({});

smallCard.args = {
  cardInformation: {
    cardNumber: {
      first: '1234',
      second: '4567',
      third: '8910',
      forth: '1234',
    },
    expirationDate: {
      month: '11',
      year: '24',
    },
    ownerName: 'UM JI HYEOK',
  },
  cardBoxSize: 'small',
};

export const bigCard = Template.bind({});

bigCard.args = {
  cardInformation: {
    cardNumber: {
      first: '1234',
      second: '4567',
      third: '8910',
      forth: '1234',
    },
    expirationDate: {
      month: '11',
      year: '24',
    },
    ownerName: 'UM JI HYEOK',
  },
  cardBoxSize: 'big',
};