import React from 'react';
import { Card } from '.';
import { Text } from '../Text';

export default {
  title: 'Component/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const PlusCard = Template.bind({});
PlusCard.args = {
  children: <Text className="CardListPage__Text">+</Text>,
};

export const PocoCard = Template.bind({});
PocoCard.args = {
  size: 'medium',
  backgroundColor: '#547CE4',
  boxShadow: true,
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  size: 'large',
  backgroundColor: '#94DACD',
  boxShadow: true,
};

export const CreditCardChip = Template.bind({});
CreditCardChip.args = {
  size: 'chip',
  backgroundColor: '#cbba64',
};
