import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './index';

const meta = {
  title: 'ui/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cardBrand: {
      control: 'inline-radio',
      options: ['local', 'visa', 'mastercard', 'amex', 'diners', 'unionpay'],
      description: '카드 브랜드',
    },
    cardCompany: {
      control: 'inline-radio',
      options: ['', 'bc', 'shinhan', 'kakao', 'hyundai', 'woori', 'lotte', 'hana', 'kookmin'],
      description: '카드사',
    },
    cardNumber: {
      control: 'object',
      description: '카드 번호 (4자리씩 4개)',
    },
    expirationPeriod: {
      control: 'object',
      description: '카드 유효기간 (MM/YY)',
    },
  },
  args: {
    cardBrand: 'local',
    cardCompany: '',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationPeriod: ['05', '26'],
    cardCompany: 'bc',
  },
};

export const Empty: Story = {
  args: {
    cardNumber: ['', '', '', ''],
    expirationPeriod: ['', ''],
    cardCompany: '',
  },
};
