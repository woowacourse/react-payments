import React from 'react';
import Card from './Card';
export default {
  component: Card,
  title: 'Card',
};

const Template = args => <Card {...args} />;

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
