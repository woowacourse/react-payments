/* eslint-disable react/function-component-definition */
import { Story, Meta } from '@storybook/react';

import { CreditCardProps } from './type';

import CreditCard from '.';

export default {
  title: 'CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<CreditCardProps> = (args) => <CreditCard {...args} />;

export const PerfectCreditCard = Template.bind({});
PerfectCreditCard.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'kb',
  },
};

export const OwnerLessCreditCard = Template.bind({});
OwnerLessCreditCard.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    expiry: '03/45',
    company: 'kb',
  },
};

export const invaildCreditCard = Template.bind({});
invaildCreditCard.args = {
  fullFilled: true,
  creditCard: {
    numbers: '12341234123',
    expiry: '03/45',
    company: 'kb',
  },
};

export const BCCreditCardCompany = Template.bind({});
BCCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'bc',
  },
};

export const KakaoCreditCardCompany = Template.bind({});
KakaoCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'kakao',
  },
};

export const ShinhanCreditCardCompany = Template.bind({});
ShinhanCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    company: 'shinhan',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const HanaCreditCardCompany = Template.bind({});
HanaCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    company: 'hana',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const HyundaiCreditCardCompany = Template.bind({});
HyundaiCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    company: 'hyundai',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const KBCreditCardCompany = Template.bind({});
KBCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    company: 'kb',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const LotteCreditCardCompany = Template.bind({});
LotteCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    company: 'lotte',
    expiry: '03/45',
    owner: 'NOAH',
  },
};

export const WooriCreditCardCompany = Template.bind({});
WooriCreditCardCompany.args = {
  fullFilled: true,
  creditCard: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'woori',
  },
};
