import { useState } from 'react';

import CardPreview from '../components/CardForm/CardPreview/CardPreview';
import CardOwnerInput from '../components/CardForm/CardOwnerInput/CardOwnerInput';
import CardExpirationInput from '../components/CardForm/CardExpirationInput/CardExpirationInput';
import CardNumberInput from '../components/CardForm/CardNumberInput/CardNumberInput';

import * as S from '../styles/App.style';

const CardRegistrationPage = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [owner, setOwner] = useState('');

  const handleCardNumbers = (cardNumbers: string[]) => {
    setCardNumbers(cardNumbers);
  };

  const handleMonth = (month: string) => {
    setMonth(month);
  };

  const handleYear = (year: string) => {
    setYear(year);
  };

  const handleOwner = (owner: string) => {
    setOwner(owner);
  };

  return (
    <S.AppLayout>
      <S.CardPreviewBoxWrapper>
        <CardPreview cardNumber={cardNumbers} month={month} year={year} owner={owner} />
      </S.CardPreviewBoxWrapper>
      <S.CardForm>
        <CardNumberInput cardNumbers={cardNumbers} handleCardNumbers={handleCardNumbers} />
        <CardExpirationInput handleMonth={handleMonth} handleYear={handleYear} />
        <CardOwnerInput handleOwner={handleOwner} />
      </S.CardForm>
    </S.AppLayout>
  );
};

export default CardRegistrationPage;
