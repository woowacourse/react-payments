import type { Meta, StoryObj } from '@storybook/react-vite';

import CardPreview from '../components/CardPreview';

const meta = {
  title: 'Components/CardPreview',
  component: CardPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardBrand: '',
    cardCompany: '',
    cardNumbers: ['', '', '', ''],
    cardExpiryDate: ['', ''],
  },
};

export const FilledVisa: Story = {
  args: {
    cardBrand: 'visa',
    cardCompany: '',
    cardNumbers: ['4123', '5678', '9875', '1234'],
    cardExpiryDate: ['12', '12'],
  },
};
export const FilledMaster: Story = {
  args: {
    cardBrand: 'master',
    cardCompany: '',
    cardNumbers: ['5123', '1234', '1234', '1234'],
    cardExpiryDate: ['12', '12'],
  },
};

export const FilledDiners: Story = {
  args: {
    cardBrand: 'diners',
    cardCompany: '',
    cardNumbers: ['3612', '345678', '9012'],
    cardExpiryDate: ['04', '29'],
  },
};

export const FilledAMEX: Story = {
  args: {
    cardBrand: 'amex',
    cardCompany: '',
    cardNumbers: ['3712', '345678', '90123'],
    cardExpiryDate: ['04', '29'],
  },
};

export const FilledUnionPay: Story = {
  args: {
    cardBrand: 'unionpay',
    cardCompany: '',
    cardNumbers: ['6221', '2612', '3456', '7890'],
    cardExpiryDate: ['04', '29'],
  },
};

export const FilledHyundai: Story = {
  args: {
    cardBrand: '',
    cardCompany: 'hyundai',
    cardNumbers: ['5511', '2222', '3333', '4444'],
    cardExpiryDate: ['12', '29'],
  },
};

export const FilledKakaoVisa: Story = {
  args: {
    cardBrand: 'visa',
    cardCompany: 'kakao',
    cardNumbers: ['4123', '1234', '1234', '1234'],
    cardExpiryDate: ['12', '29'],
  },
};
