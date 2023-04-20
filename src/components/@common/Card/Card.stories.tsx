// src/components/Card/Card.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';
import { CardRegisterInfo } from '../../../types/card.type';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

export const AddButton = Template.bind({});
AddButton.args = {
  addButton: true,
};

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
