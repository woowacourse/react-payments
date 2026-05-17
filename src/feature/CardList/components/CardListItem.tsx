import styled from 'styled-components';
import type { Card } from '../../../domain/card/types/card';
import {
  getCardCompanyColor,
  getCardCompanyName,
} from '../../../domain/card/utils/cardDisplay';

type CardListItemProps = {
  card: Card;
  handleDeleteCard: (cardId: string) => void;
};

const CardListItem = ({ card, handleDeleteCard }: CardListItemProps) => {
  const cardBackgroundColor = getCardCompanyColor(card.issuerCode);
  const cardCompanyName = getCardCompanyName(card.issuerCode);

  return (
    <Wrapper>
      <CardInfoGroup>
        <CardCompanyColorBox $backgroundColor={cardBackgroundColor} />
        <CardTextGroup>
          <CardCompanyName>{cardCompanyName}</CardCompanyName>
          <CardText>{card.number.join(' ')}</CardText>
          <CardText>유효기간 {card.expirationDate}</CardText>
        </CardTextGroup>
      </CardInfoGroup>

      <DeleteButton onClick={() => handleDeleteCard(card.id)}>
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
  padding: 18px 20px;

  border: 1px solid #e6e6e6;
  border-radius: 6px;
`;

const CardInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CardCompanyColorBox = styled.div<{ $backgroundColor: string }>`
  width: 74px;
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

const DeleteButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;

  color: #8a8a8a;

  cursor: pointer;
`;

export default CardListItem;
