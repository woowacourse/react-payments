import { Meta, StoryObj } from '@storybook/react';
import CardItem from '../components/CardListPageComponents/CardItem';

const meta = {
  title: 'Payment/CardListPageComponents/CardItem',
  component: CardItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCard = {
  id: 0,
  cardNumber: ['', '', '', ''],
  expirationDate: ['', ''],
  name: '',
  bankName: '기타은행',
  cardName: '',
};

export const Default: Story = {
  args: {
    card: mockCard,
  },
};

export const BCCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: 'BC카드',
      cardName: '엄마카드',
    },
  },
};

export const ShinhanCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: '신한카드',
      cardName: '엄마카드',
    },
  },
};

export const KakaoCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: '카카오뱅크',
      cardName: '엄마카드',
    },
  },
};

export const HyundaiCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: '현대카드',
      cardName: '엄마카드',
    },
  },
};

export const WooriCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: '우리카드',
      cardName: '엄마카드',
    },
  },
};

export const LotteCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: '롯데카드',
      cardName: '엄마카드',
    },
  },
};

export const HanaCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: '하나카드',
      cardName: '엄마카드',
    },
  },
};

export const KBCard: Story = {
  args: {
    card: {
      id: 1,
      cardNumber: ['1234', '5678', '9012', '3456'],
      expirationDate: ['12', '23'],
      name: 'HAE ON',
      bankName: '국민카드',
      cardName: '엄마카드',
    },
  },
};
