import type { Meta, StoryObj } from '@storybook/react';
import CreditCard from '../components/CreditCard';

const meta = {
  title: 'CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
  argTypes: {
    cardNumbers: {
      control: 'object',
      description: '카드 번호 입력 값',
    },
    month: {
      control: 'text',
      description: '카드 월 입력 값',
    },
    year: {
      control: 'text',
      description: '카드 연도 입력 값',
    },
    name: {
      control: 'text',
      description: '카드 소유자 입력 값',
    },
    cardBrand: {
      control: 'select',
      options: ['none', 'MasterCard', 'Visa'],
      description: '카드 브랜드 이미지',
    },
  },
} satisfies Meta<typeof CreditCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: [
      { value: '0000', isError: false },
      { value: '0000', isError: false },
      { value: '0000', isError: false },
      { value: '0000', isError: false },
    ],
    month: '00',
    year: '00',
    name: 'JOHN DOE',
    cardBrand: 'none',
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: [
      { value: '4321', isError: false },
      { value: '1234', isError: false },
      { value: '1234', isError: false },
      { value: '9876', isError: false },
    ],
    month: '12',
    year: '29',
    name: 'LIM DONGJUN',
    cardBrand: 'Visa',
  },
};

export const Master: Story = {
  args: {
    cardNumbers: [
      { value: '5323', isError: false },
      { value: '1234', isError: false },
      { value: '4321', isError: false },
      { value: '9872', isError: false },
    ],
    month: '12',
    year: '29',
    name: 'LIM DONGJUN',
    cardBrand: 'MasterCard',
  },
};
