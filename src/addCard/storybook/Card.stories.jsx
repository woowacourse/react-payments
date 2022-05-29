import React from 'react';
import Card from '../components/Card';
import { Card as CardConstructor } from '../../util';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Deactivated = Template.bind({});

Deactivated.args = {};

export const Activated = Template.bind({});

Activated.args = {
  completedCard: CardConstructor('1324', '1234', '1234', '1234', '3', '23', 'dom', '123', '1', '2'),
};

export const BigActivated = Template.bind({});

BigActivated.args = {
  completedCard: CardConstructor('1324', '1234', '1234', '1234', '3', '23', 'dom', '123', '1', '2'),
  big: true,
};
