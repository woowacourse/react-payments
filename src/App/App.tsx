import { CardCompany, CardCVCNumber, CardExpirationDate, CardNumber, CardPreview, Spacing } from '@/components';
import global from '@/styles/global';
import { CardCompanyType, DateType, SequenceType } from '@/types';
import { Global } from '@emotion/react';
import { useState } from 'react';
import * as S from './App.styles';
import { getCardType } from './utils';
import Button from '@/components/Button/Button';
import { isValidCardInfo } from '@/utils/validation';

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

  // 카드사
  const [selectedCompany, setSelectedCompany] = useState<CardCompanyType | ''>('');

  // 카드 뒤집기 상태
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const cardType = getCardType(cardNumber.first);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const isValid = isValidCardInfo({
    cardNumber,
    cardExpirationDate,
    cardCVCNumber,
    selectedCompany,
  });

  return (
    <S.Wrapper>
      <Global styles={global} />
      <S.CardPreviewWrapper>
        <CardPreview
          cardType={cardType}
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          selectedCompany={selectedCompany}
          cardCVCNumber={cardCVCNumber}
          isFlipped={isCardFlipped}
        />
      </S.CardPreviewWrapper>
      <Spacing size={60} />
      <S.CardInfoForm onSubmit={handleSubmit}>
        <CardCompany selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
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
          onFocus={() => setIsCardFlipped(true)}
          onBlur={() => setIsCardFlipped(false)}
        />
        {isValid && <Button type="submit">확인</Button>}
      </S.CardInfoForm>
    </S.Wrapper>
  );
}

export default App;
