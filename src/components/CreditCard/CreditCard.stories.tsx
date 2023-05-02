/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import { Story, Meta } from '@storybook/react';
import CreditCard, { CreditCardProps } from './CreditCard';

export default {
  title: 'CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<CreditCardProps> = (args) => <CreditCard {...args} />;

export const ShinhanCard = Template.bind({});
ShinhanCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'shinhan',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const BCCard = Template.bind({});
BCCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'bc',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const KakaoCard = Template.bind({});
KakaoCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'kakao',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const HyundaiCard = Template.bind({});
HyundaiCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'hyundai',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const WooriCard = Template.bind({});
WooriCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'woori',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const LotteCard = Template.bind({});
LotteCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'lotte',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const HanaCard = Template.bind({});
HanaCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'hana',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const Kookmin = Template.bind({});
Kookmin.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'kookmin',
    number: '1234123412341234',
    expiry: '0345',
    owner: 'NOAH',
  },
};

export const OwnerLessCreditCard = Template.bind({});
OwnerLessCreditCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'kookmin',
    number: '1234123412341234',
    expiry: '0345',
  },
};

export const invalidCreditCard = Template.bind({});
invalidCreditCard.args = {
  fullFilled: true,
  creditCard: {
    companyId: 'woori',
    number: '12341234123',
    expiry: '0345',
  },
};
