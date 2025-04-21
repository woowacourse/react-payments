import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/domain/Card';

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '',
    expiration: { month: '12', year: '12' },
  },
};
export const BCCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: 'BC카드',
    expiration: { month: '12', year: '12' },
  },
};
export const SinhanCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '신한카드',
    expiration: { month: '12', year: '12' },
  },
};
export const KakaobankCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '카카오뱅크',
    expiration: { month: '12', year: '12' },
  },
};
export const HyundaiCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '현대카드',
    expiration: { month: '12', year: '12' },
  },
};
export const WooriCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '우리카드',
    expiration: { month: '12', year: '12' },
  },
};
export const LotteCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '롯데카드',
    expiration: { month: '12', year: '12' },
  },
};
export const HanaCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '하나카드',
    expiration: { month: '12', year: '12' },
  },
};
export const KBCard: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    company: '국민카드',
    expiration: { month: '12', year: '12' },
  },
};
export const Visa: Story = {
  args: {
    cardNumber: ['4123', '1234', '1234', '1234'],
    company: '',
    expiration: { month: '12', year: '12' },
  },
};
export const MasterCard: Story = {
  args: {
    cardNumber: ['5123', '4567', '8910', '1112'],
    company: '',
    expiration: { month: '12', year: '12' },
  },
};
