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

export const BCCreditCardCompany = Template.bind({});
BCCreditCardCompany.args = {
  fullFilled: true,
  company: 'bc',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const KakaoCreditCardCompany = Template.bind({});
KakaoCreditCardCompany.args = {
  fullFilled: true,
  company: 'kakao',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const ShinhanCreditCardCompany = Template.bind({});
ShinhanCreditCardCompany.args = {
  fullFilled: true,
  company: 'shinhan',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const HanaCreditCardCompany = Template.bind({});
HanaCreditCardCompany.args = {
  fullFilled: true,
  company: 'hana',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const HyundaiCreditCardCompany = Template.bind({});
HyundaiCreditCardCompany.args = {
  fullFilled: true,
  company: 'hyundai',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const KBCreditCardCompany = Template.bind({});
KBCreditCardCompany.args = {
  fullFilled: true,
  company: 'kb',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const LotteCreditCardCompany = Template.bind({});
LotteCreditCardCompany.args = {
  fullFilled: true,
  company: 'lotte',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const WooriCreditCardCompany = Template.bind({});
WooriCreditCardCompany.args = {
  fullFilled: true,
  company: 'woori',
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};
