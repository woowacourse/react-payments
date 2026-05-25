import styled from '@emotion/styled';
import { Card } from '../../types';
import { getCompanyByIssuerCode } from '../../constants';
import { formatMaskedCardNumber } from '../../utils/cardFormat';

interface CardRowProps {
  card: Card;
  onDelete: (id: string) => void;
}

export default function CardRow({ card, onDelete }: CardRowProps) {
  const company = getCompanyByIssuerCode(card.issuerCode);

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete(card.id);
    }
  };
  return (
    <Row>
      <MiniCard $color={company.color} />
      <Info>
        <Issuer>{company.label}</Issuer>
        <Number>{formatMaskedCardNumber(card.number)}</Number>
        <Expiry>유효기간 {card.expirationDate}</Expiry>
      </Info>
      <DeleteButton type="button" onClick={handleDelete} aria-label="카드 삭제">
        ✕
      </DeleteButton>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 320px;
  height: 73px;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  box-sizing: border-box;
`;

const MiniCard = styled.div<{ $color: string }>`
  width: 64px;
  height: 40px;
  background: ${(props) => props.$color};
  border-radius: 4px;
  flex-shrink: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

const Issuer = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #353c49;
`;

const Number = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #8c8c8c;
`;

const Expiry = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 9.5px;
  font-weight: 400;
  color: #8c8c8c;
`;

const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  color: #8c8c8c;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;

  &:disabled {
    cursor: default;
  }
`;
