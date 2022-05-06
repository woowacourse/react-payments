import React from 'react';
import Card from '../components/Card.jsx';
import { getCard } from '../util.js';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Deactivated = Template.bind({});

Deactivated.args = {
  card: getCard(),
};

export const Activated = Template.bind({});

Activated.args = {
  card: getCard({
    firstCardNumber: '1234',
    secondCardNumber: '5678',
    thirdCardNumber: '1111',
    fourthCardNumber: '2222',
    expireMonth: '01',
    expireYear: '23',
    ownerName: 'ahn',
    securityCode: '123',
    firstPassword: '9',
    secondPassword: '9',
  }),
};
