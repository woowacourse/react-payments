import React from 'react';
import { Card } from '.';
import { Text } from '../Text';
import { COLOR } from '../../constants';

export default {
  title: 'Component/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const PlusCard = Template.bind({});
PlusCard.args = {
  children: (
    <Text fontSize="1.875rem" textAlign="center">
      +
    </Text>
  ),
};

export const PocoCard = Template.bind({});
PocoCard.args = {
  size: 'medium',
  backgroundColor: COLOR.POCO_CARD,
  boxShadow: true,
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  size: 'large',
  backgroundColor: COLOR.LOYD_CARD,
  boxShadow: true,
};

export const CreditCardChip = Template.bind({});
CreditCardChip.args = {
  size: 'chip',
  backgroundColor: COLOR.CREDIT_CARD_CHIP,
};
