import * as S from './AddCard.styles';
import CardNumber from '../../components/CardNumber/CardNumber';
import CardExpirationDate, { DateType } from '../../components/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../components/CardCVCNumber/CardCVCNumber';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/common/Spacing/Spacing';
import { useState } from 'react';
import { SequenceType } from '../../components/CardNumber/CardNumber';
import { getCardType } from '../../utils';
import CardBrand, { CardBrandType } from '../../components/CardBrand/CardBrand';
import CardPasswordNumber from '../../components/CardPasswordNumber/CardPasswordNumber';

export default function AddCard() {
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

  // 카드 브랜드
  const [CardBrandType, setCardBrandType] = useState<CardBrandType | null>(null);

  // 카드 비밀번호
  const [CardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState<string>('');

  const cardType = getCardType(cardNumber.first);
  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview
          cardType={cardType}
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          CardBrandType={CardBrandType}
        />
      </S.CardPreviewWrapper>
      <Spacing size={60} />
      <S.CardInfoForm>
        <CardNumber
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardNumberErrorMessage={cardNumberErrorMessage}
          setCardNumberErrorMessage={setCardNumberErrorMessage}
        />
        <CardBrand CardBrandType={CardBrandType} setCardBrandType={setCardBrandType} />
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
        <CardPasswordNumber
          CardPassword={CardPassword}
          setCardPassword={setCardPassword}
          cardPasswordErrorMessage={cardPasswordErrorMessage}
          setCardPasswordErrorMessage={setCardPasswordErrorMessage}
        />
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
