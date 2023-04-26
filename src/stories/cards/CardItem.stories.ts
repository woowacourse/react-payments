import type { Meta, StoryObj } from '@storybook/react';
import CardItem from '../../components/CardItem/CardItem';

const meta = {
  title: 'Payments/Cards/CardItem',
  component: CardItem,
  tags: ['autodocs'],
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    issuer: '',
    cardNumber: '',
    expirationDate: {
      month: '',
      year: '',
    },
    ownerName: '',
  },
};

export const ShinhanCard: Story = {
  args: {
    issuer: '신한카드',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};

export const KakaoBankCard: Story = {
  args: {
    issuer: '카카오뱅크',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};

export const LotteCard: Story = {
  args: {
    issuer: '롯데카드',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};

export const HyundaiCard: Story = {
  args: {
    issuer: '현대카드',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};

export const WooriCard: Story = {
  args: {
    issuer: '우리카드',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};

export const BCCard: Story = {
  args: {
    issuer: 'BC카드',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};

export const HanaCard: Story = {
  args: {
    issuer: '하나카드',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};

export const KBCard: Story = {
  args: {
    issuer: '국민카드',
    cardNumber: '1234567812345678',
    expirationDate: {
      month: '12',
      year: '23',
    },
    ownerName: 'WOOWA',
  },
};
