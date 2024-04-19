import { useState } from 'react';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import CardExpirationInput from '../CardExpirationInput/CardExpirationInput';
import CardOwnerInput from '../CardOwnerInput/CardOwnerInput';
import CardPreviewBox from '../CardPreview/CardPreview';

import './reset.css';
import * as S from './App.style';
import { cardNumbersType } from '../../types/cardNumbers';

function App() {
  const [cardNumbers, setCardNumbers] = useState<cardNumbersType>(['', '', '', '']);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [owner, setOwner] = useState('');

  return (
    <S.AppLayout>
      <S.CardPreviewBox>
        <CardPreviewBox cardNumbers={cardNumbers} month={month} year={year} owner={owner} />
      </S.CardPreviewBox>
      <S.CardForm>
        <CardNumberInput setCardNumbers={setCardNumbers} />
        <CardExpirationInput setMonth={setMonth} setYear={setYear} />
        <CardOwnerInput setOwner={setOwner} />
      </S.CardForm>
    </S.AppLayout>
  );
}

export default App;
