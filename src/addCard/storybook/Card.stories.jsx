import React from 'react';
import Card from '../components/Card';
import { getCard } from '../../util';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Deactivated = Template.bind({});

Deactivated.args = {};

export const Activated = Template.bind({});

Activated.args = {
  completedCard: {
    card: getCard({
      firstCardNumber: '1324',
      secondCardNumber: '1234',
      thirdCardNumber: '1234',
      fourthCardNumber: '1234',
      expireMonth: '3',
      expireYear: '23',
      ownerName: 'dom',
      securityCode: '123',
      firstPassword: '1',
      secondPassword: '2',
    }),
  },
};

export const BigActivated = Template.bind({});

BigActivated.args = {
  completedCard: {
    card: getCard({
      firstCardNumber: '1324',
      secondCardNumber: '1234',
      thirdCardNumber: '1234',
      fourthCardNumber: '1234',
      expireMonth: '3',
      expireYear: '23',
      ownerName: 'dom',
      securityCode: '123',
      firstPassword: '1',
      secondPassword: '2',
    }),
  },
  big: true,
};
