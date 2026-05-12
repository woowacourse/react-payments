import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

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
      options: ['local', 'visa', 'mastercard'],
      description: '카드 브랜드',
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
    cardCompany: null,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationPeriod: ['05', '26'],
  },
};

export const Empty: Story = {
  args: {
    cardNumber: ['', '', '', ''],
    expirationPeriod: ['', ''],
  },
};
