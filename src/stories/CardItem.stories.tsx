import { Meta, Story } from '@storybook/react';
import CardItem from '../components/common/CardItem';
import { CardContext } from '../context/CardContext';
import { CardItemInfo } from '../types/Card';

const meta = {
  title: 'Payment/CardItem',
  component: CardItem,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof CardItem>;

interface CardContextType {
  cardName: string;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  bankName: string;
  setBankName: React.Dispatch<React.SetStateAction<string>>;
  card: CardItemInfo;
  setCard: React.Dispatch<React.SetStateAction<CardItemInfo>>;
}

const Template: Story<CardContextType> = (args) => (
  <CardContext.Provider value={{ ...args, card: args.card ?? mockCard }}>
    <CardItem />
  </CardContext.Provider>
);

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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
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
  setCardName: () => {},
  setBankName: () => {},
};

export default meta;
