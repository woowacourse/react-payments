import { useState } from 'react';
import CardNumberInput from './components/CardNumberInput';
import CardExpirationInput from './components/CardExpirationInput';
import CardOwnerInput from './components/CardOwnerInput';
import CardPreviewBox from './components/CardPreview';

import './styles/reset.css';
import * as S from './styles/App.style';

function App() {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [owner, setOwner] = useState<string>('');

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
