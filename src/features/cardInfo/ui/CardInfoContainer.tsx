import { ErrorProps } from '../../../shared/model/types';
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
  margin-bottom: 80px;
`;

export default function CardInfoContainer({
  cardNumber,
  cardExpirationDate,
  cardCVC,
  cardIssuer,
  cardPassword,
  onChange,
  error,
}: {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
  cardCVC: string;
  cardIssuer: string;
  cardPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: ErrorProps;
}) {
  return (
    <CardInfoWrapper>
      {cardCVCValidator(cardCVC)[0] === NO_ERROR && <CardPasswordSection error={error} onChange={onChange} />}
      {cardExpirationDateValidator(cardExpirationDate)[0] === NO_ERROR && (
        <CardCVCSection error={error} onChange={onChange} />
      )}
      {cardIssuer !== '' && <CardExpirationDateSection error={error} onChange={onChange} />}
      {cardNumberValidator(cardNumber)[0] === NO_ERROR && (
        <CardSelection cardIssuer={cardIssuer} error={error} onChange={onChange} />
      )}
      <CardNumberSection error={error} onChange={onChange} />
    </CardInfoWrapper>
  );
}
