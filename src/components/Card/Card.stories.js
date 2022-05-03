import React from 'react';
import Card from './';
export default {
  component: Card,
  title: 'Card',
};

const Template = args => <Card {...args} />;

export const DefaultCard = Template.bind({});

DefaultCard.args = {
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
  ownerName: 'JANG JUN HYEOK',
};
