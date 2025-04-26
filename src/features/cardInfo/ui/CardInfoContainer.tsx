import CardNumberSection from './CardNumberSection';
import CardExpirationDateSection from './CardExpirationDateSection';
import CardCVCSection from './CardCVCSection';
import CardSelection from './CardSelection';
import CardPasswordSection from './CardPasswordSection';
import { cardCVCValidator, cardExpirationDateValidator, cardNumberValidator } from '../validation/cardInfoValidator';
import { NO_ERROR } from '../../../shared/constants/errorConstants';
import * as S from './CardInfoContainer.styles';
import { useCardInfoContext } from '../../../app/context/cardInfo/CardInfoProvider';

export default function CardInfoContainer() {
  const { cardInfo, updateCardInfo: onChange, error } = useCardInfoContext();

  return (
    <S.CardInfoWrapper>
      <S.AnimatedSection className={cardCVCValidator(cardInfo.cardCVC)[0] === NO_ERROR ? 'visible' : ''}>
        <CardPasswordSection error={error} onChange={onChange} />
      </S.AnimatedSection>

      <S.AnimatedSection
        className={cardExpirationDateValidator(cardInfo.cardExpirationDate)[0] === NO_ERROR ? 'visible' : ''}
      >
        <CardCVCSection error={error} onChange={onChange} />
      </S.AnimatedSection>

      <S.AnimatedSection className={cardInfo.cardIssuer !== '' ? 'visible' : ''}>
        <CardExpirationDateSection error={error} onChange={onChange} />
      </S.AnimatedSection>

      <S.AnimatedSection className={cardNumberValidator(cardInfo.cardNumber)[0] === NO_ERROR ? 'visible' : ''}>
        <CardSelection cardIssuer={cardInfo.cardIssuer} error={error} onChange={onChange} />
      </S.AnimatedSection>

      <CardNumberSection error={error} onChange={onChange} />
    </S.CardInfoWrapper>
  );
}
