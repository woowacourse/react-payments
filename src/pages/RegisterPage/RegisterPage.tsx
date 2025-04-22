import {
  CardCompany,
  CardCVCNumber,
  CardExpirationDate,
  CardNumber,
  CardPassword,
  CardPreview,
  Spacing,
} from '@/components';
import { CardCompanyType, DateType, SequenceType } from '@/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { isValidCardInfo } from '@/utils/validation';
import { getCardType } from '@/App/utils';
import * as S from './RegisterPage.styles';
import { CARD_COMPANIES } from '@/constants';

export default function RegisterPage() {
  const navigate = useNavigate();

  // 비밀번호
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState<string>('');

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
    const selectedCardCompany = CARD_COMPANIES.find((company) => company.id === selectedCompany);
    navigate('/complete', {
      state: {
        cardNumber: cardNumber.first,
        cardCompany: selectedCardCompany?.name || '',
      },
    });
  };

  const isValid = isValidCardInfo({
    cardNumber,
    cardExpirationDate,
    cardCVCNumber,
    selectedCompany,
  });

  return (
    <S.Wrapper>
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
      <Spacing size={30} />
      <S.CardInfoForm onSubmit={handleSubmit}>
        <CardPassword
          cardPassword={cardPassword}
          setCardPassword={setCardPassword}
          cardPasswordErrorMessage={cardPasswordErrorMessage}
          setCardPasswordErrorMessage={setCardPasswordErrorMessage}
        />
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
