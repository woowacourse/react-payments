import styled from "@emotion/styled";
import type { Card } from "../../types";

interface Props {
  cards: Card[];
  onDelete: (id: string) => void;
  onAddCard: () => void;
}

const ISSUER_INFO: Record<string, { name: string; color: string }> = {
  "31": { name: "BC카드", color: "#E14F4F" },
  "41": { name: "신한카드", color: "#2563EB" },
  "15": { name: "카카오뱅크", color: "#F7E600" },
  "61": { name: "현대카드", color: "#333333" },
  W1: { name: "우리카드", color: "#59C2B0" },
  "71": { name: "롯데카드", color: "#E8453C" },
  "21": { name: "하나카드", color: "#3AB277" },
  "11": { name: "국민카드", color: "#9B59B6" },
};

function formatCardNumber(masked: string) {
  return `${masked.slice(0, 4)} **** **** ${masked.slice(-4)}`;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
`;

const CardItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const CardThumbnail = styled.div<{ color: string }>`
  width: 80px;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  flex-shrink: 0;
`;

const CardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardCompanyName = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const CardNumber = styled.span`
  font-size: 13px;
  color: #8c8c8c;
`;

const CardExpiry = styled.span`
  font-size: 12px;
  color: #8c8c8c;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #8c8c8c;
  padding: 4px;
  line-height: 1;
  flex-shrink: 0;
  &:hover {
    color: #333;
  }
`;

const AddCardButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: #8c8c8c;
  cursor: pointer;
`;

export default function CardList({ cards, onDelete, onAddCard }: Props) {
  return (
    <List>
      {cards.map((card) => {
        const info = ISSUER_INFO[card.issuerCode];
        return (
          <CardItem key={card.id}>
            <CardThumbnail color={info.color} />
            <CardInfo>
              <CardCompanyName>{info.name}</CardCompanyName>
              <CardNumber>{formatCardNumber(card.number)}</CardNumber>
              <CardExpiry>유효기간 {card.expirationDate}</CardExpiry>
            </CardInfo>
            <DeleteButton onClick={() => onDelete(card.id)}>✕</DeleteButton>
          </CardItem>
        );
      })}
      <AddCardButton onClick={onAddCard}>+ 카드 추가</AddCardButton>
    </List>
  );
}
