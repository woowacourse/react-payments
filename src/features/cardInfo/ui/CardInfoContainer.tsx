import { ErrorProps } from '../../../shared/model/types';
import styled from '@emotion/styled';
import CardNumberSection from './CardNumberSection';
import CardExpirationDateSection from './CardExpirationDateSection';
import CardCVCSection from './CardCVCSection';

const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 45px 0 0;
`;

export default function CardInfoContainer({
  onChange,
  error,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: ErrorProps;
}) {
  return (
    <CardInfoWrapper>
      <CardNumberSection error={error} onChange={onChange} />
      <CardExpirationDateSection error={error} onChange={onChange} />
      <CardCVCSection error={error} onChange={onChange} />
    </CardInfoWrapper>
  );
}
