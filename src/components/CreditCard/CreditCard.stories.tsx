/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import CreditCard, { CreditCardProps } from './CreditCard';

export default {
  title: 'CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<CreditCardProps> = (args) => <CreditCard {...args} />;

export const PerfectCreditCard = Template.bind({});
PerfectCreditCard.args = {
  fullFilled: true,
  creditCard: {
    company: '신한카드',
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const OwnerLessCreditCard = Template.bind({});
OwnerLessCreditCard.args = {
  fullFilled: true,
  creditCard: {
    company: '국민카드',
    number: '1234123412341234',
    expiry: '03/45',
  },
};

export const invaildCreditCard = Template.bind({});
invaildCreditCard.args = {
  fullFilled: true,
  creditCard: {
    company: '우리카드',
    number: '12341234123',
    expiry: '03/45',
  },
};
