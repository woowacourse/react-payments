import type { Meta, StoryObj } from '@storybook/react';
import CardView from '../components/CardView';
import { Card } from '../types/card';

const mockDefaultCardInfo: Card = {
  cardNumbers: {
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
  },
  expiryDate: {
    month: '',
    year: '',
  },
  userName: '',
};

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
