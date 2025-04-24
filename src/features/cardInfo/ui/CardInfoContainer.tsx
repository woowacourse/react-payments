import { ErrorProps } from '../../../shared/model/types';
import styled from '@emotion/styled';
import CardNumberSection from './CardNumberSection';
import CardExpirationDateSection from './CardExpirationDateSection';
import CardCVCSection from './CardCVCSection';
import CardSelection from './CardSelection';
import CardPasswordSection from './CardPasswordSection';

const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 45px 0 0;
`;

export default function CardInfoContainer({
  cardIssuer,
  onChange,
  error,
}: {
  cardIssuer: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: ErrorProps;
}) {
  return (
    <CardInfoWrapper>
      <CardPasswordSection error={error} onChange={onChange} />
      <CardCVCSection error={error} onChange={onChange} />
      <CardExpirationDateSection error={error} onChange={onChange} />
      <CardNumberSection error={error} onChange={onChange} />
      <CardSelection cardIssuer={cardIssuer} error={error} onChange={onChange} />
    </CardInfoWrapper>
  );
}
