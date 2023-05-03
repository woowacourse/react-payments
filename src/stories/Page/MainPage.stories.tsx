import type { Meta } from '@storybook/react';
import { Main } from '../../pages/Main';
import { BrowserRouter } from 'react-router-dom';
import { CardListProvider } from '../../components/providers/CardListProvider';
import { useEffect } from 'react';

const meta = {
  title: 'Example/Page',
  component: Main,
  tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;

export const MainPageInApp = () => {
  return (
    <BrowserRouter>
      <CardListProvider>
        <MainPage />
      </CardListProvider>
    </BrowserRouter>
  );
};

const MainPage = () => {
  useEffect(() => {
    localStorage.setItem('cardList', DUMMY_CARD_DATA);
  }, []);

  return <Main />;
};

const DUMMY_CARD_DATA = JSON.stringify([
  {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '34' },
    ownerName: 'EXAMPLE FIVE',
    securityCode: '123',
    password: ['1', '2'],
    companyId: 'HANA',
    cardId: 'c40337b4-93d6-4362-870d-a4fc06a9863e',
    nickName: '',
  },
  {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '34' },
    ownerName: 'EXAMPLE FOUR',
    securityCode: '123',
    password: ['1', '2'],
    companyId: 'HYENDAI',
    cardId: '0e6dfb15-6305-4a0e-a912-cafdd9823c60',
    nickName: '카드 별명 3',
  },
  {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '34' },
    ownerName: 'EXAMPLE THREE',
    securityCode: '123',
    password: ['1', '2'],
    companyId: 'KAKAO',
    cardId: '062cce76-68a4-47d5-bbe3-f34f96b3418a',
    nickName: '카드 별명 2',
  },
  {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '34' },
    ownerName: 'EXAMPLE TWO',
    securityCode: '123',
    password: ['1', '2'],
    companyId: 'SHINHAN',
    cardId: 'f60d6c77-8521-42e4-9a91-ad88264218f6',
    nickName: '',
  },
  {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '34' },
    ownerName: 'EXAMPLE ONE',
    securityCode: '123',
    password: ['1', '2'],
    companyId: 'BC',
    cardId: '4231a3fe-dca1-4180-8ff4-42353adc578a',
    nickName: '카드 별명 1',
  },
]);
