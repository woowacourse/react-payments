/* eslint-disable react/function-component-definition */
import type { Meta, StoryObj } from '@storybook/react';

import CreditCard from '.';

/**
 * `CreditCard`는 사용자가 등록을 한 신용카드 또는 신용카드 미리보기에서 사용되는 컴포넌트입니다.
 */
const meta: Meta<typeof CreditCard> = {
  title: 'CreditCard',
  component: CreditCard,
};

export default meta;

type Story = StoryObj<typeof CreditCard>;

export const PerfectCreditCard: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'kb',
  },
};

export const OwnerLessCreditCard: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    company: 'kb',
  },
};

export const InvalidCreditCard: Story = {
  args: {
    numbers: '12341234123',
    expiry: '03/45',
    company: 'kb',
  },
};

export const BCCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'bc',
  },
};

export const KakaoCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'kakao',
  },
};

export const ShinhanCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'shinhan',
  },
};

export const HanaCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'hana',
  },
};

export const HyundaiCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'hyundai',
  },
};

export const KBCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'kb',
  },
};

export const LotteCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'lotte',
  },
};

export const WooriCreditCardCompany: Story = {
  args: {
    numbers: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
    company: 'woori',
  },
};
