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
  style: { backgroundColor: '#547CE4' },
  hasShadow: true,
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  style: { backgroundColor: '#94DACD' },
  hasShadow: true,
};

export const CreditCardChip = Template.bind({});
CreditCardChip.args = {
  className: 'CreditCardPreview__IC_Chip',
};
