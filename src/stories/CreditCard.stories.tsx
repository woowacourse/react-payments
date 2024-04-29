import type { Meta, StoryObj } from '@storybook/react';
import CreditCard from '../components/cards/CreditCard';

const meta = {
  title: 'Card/CreditCard',
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
    backgroundColor: '#333333',
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
    backgroundColor: '#333333',
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
    backgroundColor: '#333333',
  },
};

export const 신한카드: Story = {
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
    backgroundColor: 'rgba(0, 70, 255, 1)',
  },
};

export const BC카드: Story = {
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
    backgroundColor: 'rgba(240, 70, 81, 1)',
  },
};

export const 카카오뱅크: Story = {
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
    backgroundColor: 'rgba(255, 230, 0, 1)',
  },
};

export const 현대카드: Story = {
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
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
};

export const 우리카드: Story = {
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
    backgroundColor: 'rgba(0, 123, 200, 1)',
  },
};
export const 롯데카드: Story = {
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
    backgroundColor: 'rgba(237, 28, 36, 1)',
  },
};

export const 하나카드: Story = {
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
    backgroundColor: 'rgba(0, 148, 144, 1)',
  },
};

export const 국민카드: Story = {
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
    backgroundColor: 'rgba(106, 96, 86, 1)',
  },
};
