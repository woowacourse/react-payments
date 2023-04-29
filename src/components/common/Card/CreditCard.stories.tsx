import { Meta, StoryObj } from '@storybook/react';
import { CreditCard } from './CreditCard';
import { BankCodeList, Card } from './types';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';

const meta = {
  tags: ['autodocs'],
  title: 'CreditCard',
  component: CreditCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CreditCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultCard: Card = {
  numbers: ['8721', '3469', '2837', '4612'],
  expirationDate: {
    month: '23',
    year: '48',
  },
  name: 'PARK',
  securityCode: '123',
  password: {
    first: '1',
    second: '2',
  },
  bankCode: BankCodeList.BCCard,
};

export const BCCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.BCCard },
  },
};

export const ShinHanCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.ShinHanCard },
  },
};

export const KakaoBank: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.KakaoBank },
  },
};

export const HyunDaiCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.HyunDaiCard },
  },
};

export const WooriCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.WooriCard },
  },
};

export const LotteCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.LotteCard },
  },
};

export const HanaCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.HanaCard },
  },
};

export const KookMinCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCodeList.KookMinCard },
  },
};
