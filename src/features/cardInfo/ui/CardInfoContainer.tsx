import CardNumberSection from './CardNumberSection';
import CardExpirationDateSection from './CardExpirationDateSection';
import CardCVCSection from './CardCVCSection';
import CardSelection from './CardSelection';
import CardPasswordSection from './CardPasswordSection';
import { cardCVCValidator, cardExpirationDateValidator, cardNumberValidator } from '../validation/cardInfoValidator';
import { NO_ERROR } from '../../../shared/constants/errorConstants';
import * as S from './CardInfoContainer.styles';
import { useCardInfoContext } from '../context/CardInfoContext';

export default function CardInfoContainer() {
  const { cardInfo, updateCardInfo, error } = useCardInfoContext();

  return (
    <S.CardInfoWrapper>
      <S.AnimatedSection visible={cardCVCValidator(cardInfo.cardCVC)[0] === NO_ERROR}>
        <CardPasswordSection error={error} onBlur={updateCardInfo} />
      </S.AnimatedSection>

      <S.AnimatedSection visible={cardExpirationDateValidator(cardInfo.cardExpirationDate)[0] === NO_ERROR}>
        <CardCVCSection error={error} onBlur={updateCardInfo} />
      </S.AnimatedSection>

      <S.AnimatedSection visible={cardInfo.cardIssuer !== ''}>
        <CardExpirationDateSection error={error} onBlur={updateCardInfo} />
      </S.AnimatedSection>

      <S.AnimatedSection visible={cardNumberValidator(cardInfo.cardNumber)[0] === NO_ERROR}>
        <CardSelection cardIssuer={cardInfo.cardIssuer} error={error} onBlur={updateCardInfo} />
      </S.AnimatedSection>

      <CardNumberSection error={error} onBlur={updateCardInfo} />
    </S.CardInfoWrapper>
  );
}
