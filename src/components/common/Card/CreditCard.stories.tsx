import { Meta, StoryObj } from '@storybook/react';
import { CreditCard } from './CreditCard';
import { BankCode, Card } from './types';
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
  bankCode: BankCode.BCCard,
};

export const PartialCard: Story = {
  args: {
    card: {
      numbers: ['', '', '', ''],
      expirationDate: {
        month: '',
        year: '',
      },
      name: '',
      securityCode: '',
      password: {
        first: '',
        second: '',
      },
      // bankCode: BankCode.BCCard,
    },
  },
};

export const BCCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.BCCard },
  },
};

export const ShinHanCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.ShinHanCard },
  },
};

export const KakaoBank: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.KakaoBank },
  },
};

export const HyunDaiCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.HyunDaiCard },
  },
};

export const WooriCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.WooriCard },
  },
};

export const LotteCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.LotteCard },
  },
};

export const HanaCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.HanaCard },
  },
};

export const KookMinCard: Story = {
  args: {
    card: { ...defaultCard, bankCode: BankCode.KookMinCard },
  },
};
