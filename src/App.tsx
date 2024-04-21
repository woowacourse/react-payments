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
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <S.AppLayout>
        <S.CardPreviewBox>
          <CardPreview cardNumber={cardNumbers} month={month} year={year} owner={owner} />
        </S.CardPreviewBox>
        <S.CardForm>
          <CardNumberInput cardNumbers={cardNumbers} handleCardNumbers={handleCardNumbers} />
          <CardExpirationInput handleMonth={handleMonth} handleYear={handleYear} />
          <CardOwnerInput handleOwner={handleOwner} />
        </S.CardForm>
      </S.AppLayout>
    </ThemeProvider>
  );
}

export default App;
