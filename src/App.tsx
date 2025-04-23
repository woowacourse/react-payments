import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import Card from './components/Card/Card';
import CvcSection from './components/CvcSection/CvcSection';
import { CardBrandType, CardNumberType, CvcType, ExpirationType } from './types';
import { INITIAL_CARD_NUMBER, INITIAL_CVC, INITIAL_EXPIRATION } from './constants';
import CardTypeSection from './components/CardTypeSection/CardTypeSection';
import NewDropdown from './components/Dropdown/Dropdown';
import Dropdown2 from './components/Dropdown/Dropdown2';

const CARD_COMPANY = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  const [cardLogo, setCardLogo] = useState<keyof CardBrandType | null>(null);
  const [expiration, setExpiration] = useState<ExpirationType>(INITIAL_EXPIRATION);
  const [cvc, setCvc] = useState<CvcType>(INITIAL_CVC);
  const [company, setCompany] = useState<string>('');
  const handleSelect = (value: string) => {
    setCompany(value);
  };

  return (
    <div className={styles.appContainer}>
      <Card numbers={cardNumbers} cardLogo={cardLogo} expiration={expiration} />
      <Dropdown2 placeholder="카드사를 선택해주세요" list={CARD_COMPANY} value={company} onSelect={handleSelect} />
      <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />
      <CardExpirationSection expiration={expiration} setExpiration={setExpiration} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
    </div>
  );
}
// const isCardNumberValid = Object.values(cardNumbers).every((c) => !c.isError && c.value.length === 4);
// const isExpirationValid = expiration.year.value && expiration.month.value;
