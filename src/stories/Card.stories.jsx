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

Activated.args = {};
