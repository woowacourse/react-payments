import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  tags: ['autodocs'],
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const HyundaiCard: Story = {
  args: {
    cardType: '현대카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    expired: '01/01',
  },
};

export const BCCard: Story = {
  args: {
    cardType: 'BC카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LIM',
    expired: '01/01',
  },
};
export const ShinhanCard: Story = {
  args: {
    cardType: '신한카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'SHIN',
    expired: '01/01',
  },
};

export const KookminCard: Story = {
  args: {
    cardType: '국민카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'KOOK',
    expired: '01/01',
  },
};

export const LotteCard: Story = {
  args: {
    cardType: '롯데카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    expired: '01/01',
  },
};

export const WooriCard: Story = {
  args: {
    cardType: '우리카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'WOORICARD',
    expired: '01/01',
  },
};

export const KakaoBank: Story = {
  args: {
    cardType: '카카오뱅크',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'KAKAKAKAOOO',
    expired: '01/01',
  },
};
export const HanaCard: Story = {
  args: {
    cardType: '하나카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'KIMHANA',
    expired: '01/01',
  },
};
