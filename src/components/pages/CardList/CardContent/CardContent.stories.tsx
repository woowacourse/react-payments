import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardContentProps } from './CardContent';
import { CardRegisterInfo } from '../../../../types/card.type';

export default {
  title: 'Components/CardContent',
  component: Card,
} as Meta;

const Template: Story<CardContentProps> = (args: CardContentProps) => <Card {...args} />;

export const CardContent = Template.bind({});
CardContent.args = {
  cardNumber: {
    first: '1234',
    second: '5678',
    third: '9012',
    fourth: '3456',
  },
  expirationDate: {
    month: '8',
    year: '25',
  },
  holderName: 'John Doe',
} as CardRegisterInfo;
