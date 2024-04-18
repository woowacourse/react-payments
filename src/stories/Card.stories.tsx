import type { Meta, StoryObj } from '@storybook/react';
import CardView from '../components/Card';

const mockDefaultCardInfo = {
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
  month: '',
  year: '',
  userName: '',
};

const mockVisaCardInfo = {
  cardNumber1: '4123',
  cardNumber2: '1234',
  cardNumber3: '1234',
  cardNumber4: '1234',
  month: '12',
  year: '29',
  userName: 'SDF SDF',
};

const mockMasterCardInfo = {
  cardNumber1: '5111',
  cardNumber2: '1234',
  cardNumber3: '1234',
  cardNumber4: '1234',
  month: '1',
  year: '24',
  userName: 'CRON LEE',
};

const meta = {
  title: 'CardView',
  component: CardView,
  tags: ['autodocs'],
  argTypes: {
    cardInfo: {
      options: ['Default', 'ViSA', 'MASTER_CARD'],
      mapping: {
        Default: mockDefaultCardInfo,
        VISA: mockVisaCardInfo,
        MASTER_CARD: mockMasterCardInfo,
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
