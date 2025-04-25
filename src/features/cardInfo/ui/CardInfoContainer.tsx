import { CardInfoProps, ErrorProps } from '../../../shared/model/types';
import styled from '@emotion/styled';
import CardNumberSection from './CardNumberSection';
import CardExpirationDateSection from './CardExpirationDateSection';
import CardCVCSection from './CardCVCSection';
import CardSelection from './CardSelection';
import CardPasswordSection from './CardPasswordSection';
import { cardCVCValidator, cardExpirationDateValidator, cardNumberValidator } from '../validation/cardInfoValidator';
import { NO_ERROR } from '../../../shared/constants/errorConstants';

const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 45px 0;
`;

export default function CardInfoContainer({
  cardInfo,
  onChange,
  error,
}: {
  cardInfo: CardInfoProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: ErrorProps;
}) {
  return (
    <CardInfoWrapper>
      {cardCVCValidator(cardInfo.cardCVC)[0] === NO_ERROR && <CardPasswordSection error={error} onChange={onChange} />}
      {cardExpirationDateValidator(cardInfo.cardExpirationDate)[0] === NO_ERROR && (
        <CardCVCSection error={error} onChange={onChange} />
      )}
      {cardInfo.cardIssuer !== '' && <CardExpirationDateSection error={error} onChange={onChange} />}
      {cardNumberValidator(cardInfo.cardNumber)[0] === NO_ERROR && (
        <CardSelection cardIssuer={cardInfo.cardIssuer} error={error} onChange={onChange} />
      )}
      <CardNumberSection error={error} onChange={onChange} />
    </CardInfoWrapper>
  );
}
