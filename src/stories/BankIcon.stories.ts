import type { Meta, StoryObj } from '@storybook/react';

import BankIcon from '../components/BankIcon';

const meta: Meta<typeof BankIcon> = {
  title: 'BankIcon',
  tags: ['autodocs'],
  component: BankIcon,
};

export default meta;
type Story = StoryObj<typeof BankIcon>;

export const BCCard: Story = {
  args: {
    bankName: 'BC카드',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};

export const KookminCard: Story = {
  args: {
    bankName: '국민카드',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};
export const LotteCard: Story = {
  args: {
    bankName: '롯데카드',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};
export const ShinhanCard: Story = {
  args: {
    bankName: '신한카드',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};
export const WooriCard: Story = {
  args: {
    bankName: '우리카드',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};
export const KakaoCard: Story = {
  args: {
    bankName: '카카오뱅크',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};
export const HanaCard: Story = {
  args: {
    bankName: '하나카드',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};
export const HyundaiCard: Story = {
  args: {
    bankName: '현대카드',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};

export const NoNameCard: Story = {
  args: {
    bankName: '',
    determineCardType: () => {},
    selectCardType: () => {},
  },
};
