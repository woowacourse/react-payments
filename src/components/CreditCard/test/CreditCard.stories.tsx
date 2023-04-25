/* eslint-disable react/function-component-definition */

import { Story, Meta } from '@storybook/react';

import CreditCard, { CreditCardProps } from '..';

export default {
  title: 'CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<CreditCardProps> = (args) => <CreditCard {...args} />;

export const PerfectCreditCard = Template.bind({});
PerfectCreditCard.args = {
  fullFilled: true,
  company: 'kb',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const OwnerLessCreditCard = Template.bind({});
OwnerLessCreditCard.args = {
  fullFilled: true,
  company: 'kb',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
  },
};

export const invaildCreditCard = Template.bind({});
invaildCreditCard.args = {
  fullFilled: true,
  company: 'kb',
  creditCard: {
    number: '12341234123',
    expiry: '03/45',
  },
};
