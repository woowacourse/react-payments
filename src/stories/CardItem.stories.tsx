import { Meta, Story } from '@storybook/react';
import CardItem from '../components/common/CardItem';
import { CardItemInfo } from '../types/Card';

const meta = {
  title: 'Payment/common/CardItem',
  component: CardItem,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof CardItem>;

interface CardItemProps {
  card: CardItemInfo;
  onOpen?: () => void;
}

const Template: Story<CardItemProps> = (args) => <CardItem {...args} />;

const mockCard = {
  id: 0,
  cardNumber: ['', '', '', ''],
  expirationDate: ['', ''],
  name: '',
  bankName: '기타은행',
  cardName: '',
};

export const Default = Template.bind({});
Default.args = {
  card: mockCard,
};

export const BCCard = Template.bind({});
BCCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: 'BC카드',
    cardName: '엄마카드',
  },
};

export const ShinhanCard = Template.bind({});
ShinhanCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: '신한카드',
    cardName: '엄마카드',
  },
};

export const KakaoCard = Template.bind({});
KakaoCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: '카카오뱅크',
    cardName: '엄마카드',
  },
};

export const HyundaiCard = Template.bind({});
HyundaiCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: '현대카드',
    cardName: '엄마카드',
  },
};

export const WooriCard = Template.bind({});
WooriCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: '우리카드',
    cardName: '엄마카드',
  },
};

export const LotteCard = Template.bind({});
LotteCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: '롯데카드',
    cardName: '엄마카드',
  },
};

export const HanaCard = Template.bind({});
HanaCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: '하나카드',
    cardName: '엄마카드',
  },
};

export const KBCard = Template.bind({});
KBCard.args = {
  card: {
    id: 1,
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationDate: ['12', '23'],
    name: 'HAE ON',
    bankName: '국민카드',
    cardName: '엄마카드',
  },
};

export default meta;
