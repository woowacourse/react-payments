import { useState } from 'react';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import CardExpirationInput from '../CardExpirationInput/CardExpirationInput';
import CardOwnerInput from '../CardOwnerInput/CardOwnerInput';
import CardPreviewBox from '../CardPreview/CardPreview';

import './reset.css';
import * as S from './App.style';

function App() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [owner, setOwner] = useState('');

  return (
    <S.AppLayout>
      <S.CardPreviewBox>
        <CardPreviewBox cardNumber={cardNumber} month={month} year={year} owner={owner} />
      </S.CardPreviewBox>
      <S.CardForm>
        <CardNumberInput setCardNumber={setCardNumber} />
        <CardExpirationInput setMonth={setMonth} setYear={setYear} />
        <CardOwnerInput setOwner={setOwner} />
      </S.CardForm>
    </S.AppLayout>
  );
}

export default App;
