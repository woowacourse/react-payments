import CardInfoSection from './CardInfoSection';
import { cardInfoSectionSpec } from '../data/cardInfoSectionSpec';
import { ErrorProps } from '../../../shared/type/types';
import styled from '@emotion/styled';

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
  error?: ErrorProps;
}) {
  return (
    <CardInfoWrapper>
      {cardInfoSectionSpec.map((data, index) => (
        <CardInfoSection key={`${data.id}-${index}`} {...data} onChange={onChange} error={error} />
      ))}
    </CardInfoWrapper>
  );
}
