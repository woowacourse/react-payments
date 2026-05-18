import styled from "@emotion/styled";
import CardList from "./CardList";

export default function CardListPanel({ cards }) {
  return (
    <>
      <CardList cards={cards} />
      <CardAddButton>+ 카드 추가</CardAddButton>
    </>
  );
}

const CardAddButton = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 12px 16px;
  border-width: 1px;
  border-style: dashed;
  dashes: 4, 4;
  color: #8c8c8c;
  margin-top: 1rem;
  background-color: transparent;
`;
