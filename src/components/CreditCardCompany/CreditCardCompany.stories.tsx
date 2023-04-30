/* eslint-disable react/function-component-definition */
import type { Meta, StoryObj } from '@storybook/react';

import CreditCardCompany from '.';

/**
 * `CreditCardCompany`는 사용자가 등록을 한 신용카드 또는 신용카드 미리보기에서 사용되는 컴포넌트입니다.
 */
const meta: Meta<typeof CreditCardCompany> = {
  title: 'CreditCardCompany',
  component: CreditCardCompany,
};

export default meta;

type Story = StoryObj<typeof CreditCardCompany>;

export const BCCreditCardCompany: Story = {
  args: {
    company: 'bc',
  },
};

export const KakaoCreditCardCompany: Story = {
  args: {
    company: 'kakao',
  },
};

export const ShinhanCreditCardCompany: Story = {
  args: {
    company: 'shinhan',
  },
};

export const HanaCreditCardCompany: Story = {
  args: {
    company: 'hana',
  },
};

export const HyundaiCreditCardCompany: Story = {
  args: {
    company: 'hyundai',
  },
};

export const KBCreditCardCompany: Story = {
  args: {
    company: 'kb',
  },
};

export const LotteCreditCardCompany: Story = {
  args: {
    company: 'lotte',
  },
};

export const WooriCreditCardCompany: Story = {
  args: {
    company: 'woori',
  },
};
