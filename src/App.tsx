import { useState } from 'react';
import * as S from './App.styles';
import CardCVCNumber from './components/CardCVCNumber';
import CardExpirationDate, { DateType } from './components/CardExpirationDate';
import CardNumber, { SequenceType } from './components/CardNumber';
import CardPreview from './components/CardPreview';
import Spacing from './components/common/Spacing';
import { MASTER_CARD_CONDITIONS, VISA_CARD_CONDITIONS } from './constants';
import { CardType } from './types';
import { Global } from '@emotion/react';
import global from './styles/global';

export const getCardType = (cardNumberFirst: string): CardType => {
  if (VISA_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'visa';
  if (MASTER_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'master';
  return 'etc';
};

function App() {
  // 카드 번호
  const [cardNumber, setCardNumber] = useState<Record<SequenceType, string>>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState<Record<SequenceType, string>>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  // 카드 유효기간
  const [cardExpirationDate, setCardExpirationDate] = useState<Record<DateType, string>>({
    month: '',
    year: '',
  });
  const [cardExpirationDateErrorMessage, setCardExpirationDateErrorMessage] = useState<Record<DateType, string>>({
    month: '',
    year: '',
  });

  // 카드 CVC 번호
  const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
  const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<string>('');

  const cardType = getCardType(cardNumber.first);
  return (
    <S.Wrapper>
      <Global styles={global} />
      <S.CardPreviewWrapper>
        <CardPreview cardType={cardType} cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} />
      </S.CardPreviewWrapper>
      <Spacing size={60} />
      <S.CardInfoForm>
        <CardNumber
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardNumberErrorMessage={cardNumberErrorMessage}
          setCardNumberErrorMessage={setCardNumberErrorMessage}
        />
        <CardExpirationDate
          cardExpirationDate={cardExpirationDate}
          setCardExpirationDate={setCardExpirationDate}
          cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
          setCardExpirationDateErrorMessage={setCardExpirationDateErrorMessage}
        />
        <CardCVCNumber
          cardCVCNumber={cardCVCNumber}
          setCardCVCNumber={setCardCVCNumber}
          cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
          setCardCVCNumberErrorMessage={setCardCVCNumberErrorMessage}
        />
      </S.CardInfoForm>
    </S.Wrapper>
  );
}

export default App;
