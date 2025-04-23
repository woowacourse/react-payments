import * as S from './AddCard.styles';
import CardNumber from '../../components/CardNumber/CardNumber';
import CardExpirationDate, { DateType } from '../../components/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../components/CardCVCNumber/CardCVCNumber';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/common/Spacing/Spacing';
import { useState } from 'react';
import { SequenceType } from '../../components/CardNumber/CardNumber';
import { getCardType } from '../../utils';
import CardBrand from '../../components/CardBrand/CardBrand';
import CardPasswordNumber from '../../components/CardPasswordNumber/CardPasswordNumber';
import { useControlledCardBrand } from '../../components/CardBrand/hooks/useControlledCardBrand';

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

  // 카드 비밀번호
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState<string>('');
  const { cardBrandType, handleDropdownChange } = useControlledCardBrand();
  const cardType = getCardType(cardNumber.first);
  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview
          cardType={cardType}
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          CardBrandType={cardBrandType}
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
        <CardBrand CardBrandType={cardBrandType} handleDropdownChange={handleDropdownChange} />
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
          CardPassword={cardPassword}
          setCardPassword={setCardPassword}
          cardPasswordErrorMessage={cardPasswordErrorMessage}
          setCardPasswordErrorMessage={setCardPasswordErrorMessage}
        />
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
