import styled from 'styled-components';
import type { Card } from '../../../domain/card/types/card';
import {
  getCardCompanyColorByIssuerCode,
  getCardCompanyNameByIssuerCode,
} from '../utils/issuerCode';

type CardListItemProps = {
  card: Card;
  handleDeleteCard: (cardId: string) => void;
};

const CardListItem = ({ card, handleDeleteCard }: CardListItemProps) => {
  const cardBackgroundColor = getCardCompanyColorByIssuerCode(card.issuerCode);
  const cardCompanyName = getCardCompanyNameByIssuerCode(card.issuerCode);

  return (
    <Wrapper>
      <CardInfoGroup>
        <CardCompanyColorBox $backgroundColor={cardBackgroundColor} />
        <CardTextGroup>
          <CardCompanyName>{cardCompanyName}</CardCompanyName>
          <CardText>{card.number.match(/.{1,4}/g)?.join(' ')}</CardText>
          <CardText>유효기간 {card.expirationDate}</CardText>
        </CardTextGroup>
      </CardInfoGroup>

      <DeleteButton
        aria-label="카드 삭제"
        onClick={() => handleDeleteCard(card.id)}
      >
        &times;
      </DeleteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 12px;

  border: 1px solid #e6e6e6;
  border-radius: 6px;
`;

const CardInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CardCompanyColorBox = styled.div<{ $backgroundColor: string }>`
  width: 70px;
  height: 45px;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 4px;
`;

const CardTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardCompanyName = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const CardText = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #8c8c8c;
`;

const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;

  color: #8a8a8a;

  cursor: pointer;
`;

export default CardListItem;
