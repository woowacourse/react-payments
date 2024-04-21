import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import CardNumberInput from './components/CardForm/CardNumberInput/CardNumberInput';
import CardExpirationInput from './components/CardForm/CardExpirationInput/CardExpirationInput';
import CardOwnerInput from './components/CardForm/CardOwnerInput/CardOwnerInput';
import CardPreview from './components/CardForm/CardPreview/CardPreview';

import theme from './styles/theme';
import GlobalStyles from './styles/Global.style';
import * as S from './styles/App.style';

function App() {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [owner, setOwner] = useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <S.AppLayout>
        <S.CardPreviewBox>
          <CardPreview cardNumber={cardNumber} month={month} year={year} owner={owner} />
        </S.CardPreviewBox>
        <S.CardForm>
          <CardNumberInput setCardNumber={setCardNumber} />
          <CardExpirationInput setMonth={setMonth} setYear={setYear} />
          <CardOwnerInput setOwner={setOwner} />
        </S.CardForm>
      </S.AppLayout>
    </ThemeProvider>
  );
}

export default App;
