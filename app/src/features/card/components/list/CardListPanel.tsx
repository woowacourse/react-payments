import styled from "@emotion/styled";
import { Link } from "react-router";
import CardList from "./CardList";
import type { Card } from "../../types";

export default function CardListPanel({
  cards,
  handleDeleteCard,
}: {
  cards: Card[];
  handleDeleteCard: (id: string) => void;
}) {
  return (
    <div>
      <CardList cards={cards} handleDeleteCard={handleDeleteCard} />
      <CardAddButton to="/card/create/">+ 카드 추가</CardAddButton>
    </div>
  );
}

const CardAddButton = styled(Link)`
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: 12px 16px;
  border-width: 1px;
  border-style: dashed;
  color: #8c8c8c;
  margin-top: 1rem;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;
