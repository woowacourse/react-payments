import React from 'react';
import Card from '../components/Card.jsx';
import '../css/index.css';
import '../css/App.css';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Deactivated = Template.bind({});

Deactivated.args = {
  isEmptyCard: true,
  cardNumber: '',
  ownerName: 'NAME',
  expireDate: 'MM/YY',
};

export const Activated = Template.bind({});

Activated.args = {
  isEmptyCard: false,
  cardNumber: '1324 1234 oooo oooo',
  ownerName: 'AHN',
  expireDate: '04/23',
};
