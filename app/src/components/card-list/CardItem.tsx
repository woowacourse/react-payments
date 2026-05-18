import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import type { Card } from '../../types/card';
import { CARD_COMPANY_INFO } from '../../constants/cardCompanyOptions';
import { deleteCard } from '../../api/cardsAPI';

export function CardItem({ cards, onDelete }: { cards: Card[]; onDelete: () => void }) {
  const navigate = useNavigate();
  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    await deleteCard(id);
    onDelete();
  };

  return (
    <Container>
      {cards.map((card) => {
        const label =
          Object.values(CARD_COMPANY_INFO).find((info) => info.issuerCode === card.issuerCode)
            ?.label ?? card.issuerCode;
        const color =
          Object.values(CARD_COMPANY_INFO).find((info) => info.issuerCode === card.issuerCode)
            ?.color ?? card.issuerCode;

        return (
          <CardContainer key={card.id} $CardColor={color}>
            <div className="colored-card" />
            <div className="card-info-container">
              <p className="card-name">{label}</p>
              <p className="card-number">{card.number.replace(/(.{4})/g, '$1 ').trim()}</p>
              <p className="card-expiration-date">유효기간 {card.expirationDate}</p>
            </div>
            <button onClick={() => handleDelete(card.id)}>✕</button>
          </CardContainer>
        );
      })}
      <AddCardButton
        onClick={() => {
          navigate('/react-payments/add');
        }}
      >
        + 카드 추가
      </AddCardButton>
    </Container>
  );
}

type CardColor = {
  $CardColor?: string;
};

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardContainer = styled.div<CardColor>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;

  .colored-card {
    background-color: ${(props) => props.$CardColor ?? '#333333'};
    width: 64px;
    height: 40px;
    border-radius: 4px;
    border: none;
  }

  .card-info-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.25rem;
    box-sizing: border-box;
    padding: 0.75rem 0 0.75rem 0.75rem;
  }

  p {
    margin: 0;
    line-height: 1;
  }

  .card-name {
    font-weight: 700;
    font-size: 14px;
  }

  .card-number {
    font-weight: 400;
    font-size: 11px;
  }

  .card-expiration-date {
    font-weight: 400;
    font-size: 9.5px;
  }

  button {
    cursor: pointer;
    width: 14px;
    height: 19px;
    font-weight: 400;
    font-size: 16px;
    border: none;
    background: none;
    padding: 0;
    color: #8c8c8c;
  }
`;

const AddCardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px dashed #e6e6e6;
  border-radius: 5px;
  font-weight: 500;
  font-size: 13px;
  color: #8c8c8c;
  cursor: pointer;
  background: none;
`;
