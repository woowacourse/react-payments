import CardNumberSection from './CardNumberSection';
import CardExpirationDateSection from './CardExpirationDateSection';
import CardCVCSection from './CardCVCSection';
import CardSelection from './CardSelection';
import CardPasswordSection from './CardPasswordSection';
import { cardCVCValidator, cardExpirationDateValidator, cardNumberValidator } from '../validation/cardInfoValidator';
import { NO_ERROR } from '../../../shared/constants/errorConstants';
import * as S from './CardInfoContainer.styles';
import { useCardInfoContext } from '../context/CardInfoContext';
import { useRef } from 'react';

export default function CardInfoContainer() {
  const { cardInfo, updateCardInfo, error } = useCardInfoContext();

  const cardSelectionRef = useRef<HTMLSelectElement>(null);
  const cardExpirationMonthRef = useRef<HTMLInputElement>(null);
  const cardCVCRef = useRef<HTMLInputElement>(null);
  const cardPasswordRef = useRef<HTMLInputElement>(null);

  const moveToCardSelection = () => cardSelectionRef.current?.focus();
  const moveToExpirationMonth = () => cardExpirationMonthRef.current?.focus();
  const moveToCVC = () => cardCVCRef.current?.focus();
  const moveToPassword = () => cardPasswordRef.current?.focus();

  return (
    <S.CardInfoWrapper>
      <S.AnimatedSection visible={cardCVCValidator(cardInfo.cardCVC)[0] === NO_ERROR}>
        <CardPasswordSection error={error} onBlur={updateCardInfo} selectRef={cardPasswordRef} />
      </S.AnimatedSection>

      <S.AnimatedSection visible={cardExpirationDateValidator(cardInfo.cardExpirationDate)[0] === NO_ERROR}>
        <CardCVCSection error={error} onBlur={updateCardInfo} selectRef={cardCVCRef} onComplete={moveToPassword} />
      </S.AnimatedSection>

      <S.AnimatedSection visible={cardInfo.cardIssuer !== ''}>
        <CardExpirationDateSection
          error={error}
          onBlur={updateCardInfo}
          selectRef={cardExpirationMonthRef}
          onComplete={moveToCVC}
        />
      </S.AnimatedSection>

      <S.AnimatedSection visible={cardNumberValidator(cardInfo.cardNumber)[0] === NO_ERROR}>
        <CardSelection
          cardIssuer={cardInfo.cardIssuer}
          error={error}
          onBlur={updateCardInfo}
          selectRef={cardSelectionRef}
          onComplete={moveToExpirationMonth}
        />
      </S.AnimatedSection>

      <CardNumberSection error={error} onBlur={updateCardInfo} onComplete={moveToCardSelection} />
    </S.CardInfoWrapper>
  );
}
