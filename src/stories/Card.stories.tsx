import type { Meta, StoryObj } from '@storybook/react';
import CardView from '../components/CardView';
import { Card } from '../types/card';
import { DEFAULT_CARD } from '../constants/card';
import { CARD_COMPANY_CATEGORIES } from '../constants/cardCompany';

const mockDefaultCardInfo: Card = DEFAULT_CARD;

const mockVisaCardInfo: Card = {
  cardNumbers: {
    cardNumber1: '4123',
    cardNumber2: '1234',
    cardNumber3: '1234',
    cardNumber4: '1234',
  },
  expiryDate: {
    month: '1',
    year: '1',
  },
  userName: 'HAILEY CHOI',
  cardCompany: CARD_COMPANY_CATEGORIES[6],
  cvc: '123',
  password: '1234',
};

const mockMasterCardInfo: Card = {
  cardNumbers: {
    cardNumber1: '5123',
    cardNumber2: '1234',
    cardNumber3: '1234',
    cardNumber4: '1234',
  },
  expiryDate: {
    month: '12',
    year: '30',
  },
  userName: 'HAILEY CHOI',
  cardCompany: CARD_COMPANY_CATEGORIES[4],
  cvc: '123',
  password: '1234',
};

const mockCVCcardInfo: Card = {
  cardNumbers: {
    cardNumber1: '5123',
    cardNumber2: '1234',
    cardNumber3: '1234',
    cardNumber4: '1234',
  },
  expiryDate: {
    month: '12',
    year: '30',
  },
  userName: 'HAILEY CHOI',
  cardCompany: CARD_COMPANY_CATEGORIES[4],
  cvc: '21',
  password: '',
};

const meta = {
  title: 'CardView',
  component: CardView,
  tags: ['autodocs'],
  argTypes: {
    cardInfo: {
      options: ['Default', 'Visa', 'Master'],
      mapping: {
        Default: mockDefaultCardInfo,
        Visa: mockVisaCardInfo,
        Master: mockMasterCardInfo,
      },
    },
  },
} satisfies Meta<typeof CardView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardInfo: mockDefaultCardInfo,
  },
};

export const Visa: Story = {
  args: {
    cardInfo: mockVisaCardInfo,
  },
};

export const Master: Story = {
  args: {
    cardInfo: mockMasterCardInfo,
  },
};

export const CARD_BACK_VIEW: Story = {
  args: {
    cardInfo: mockCVCcardInfo,
  },
};
