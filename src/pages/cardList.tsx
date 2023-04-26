import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/common/Header";
import { useEffect, useState } from "react";
import { CardInfo, CardItem } from "../components/common/cardItem";
import { getData } from "../utils/localStorage";
import { Card, CardProps } from "../components/common/card";

export function CardList() {
  const [cards, setCards] = useState<CardProps[]>();
  const navigate = useNavigate();

  useEffect(() => {
    setCards(getData());
  }, []);

  function moveAddCardPage() {
    navigate("/add-card");
  }

  return (
    <CardListContainer>
      <Header title="보유 카드" />
      <Section>
        <h3>{cards?.length === 0 ? "새로운 카드를 추가하세요" : ""}</h3>
        {cards &&
          cards?.map((card) => {
            return (
              <Card
                key={card.userName}
                cardNumber={card?.cardNumber}
                month={card.month}
                year={card.year}
                userName={card?.userName}></Card>
            );
          })}
        <Button onClick={moveAddCardPage}>+</Button>
      </Section>
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  gap: 3rem;
  ${({ theme }) => theme.fonts.h2}
`;

const Button = styled.button`
  background: #e5e5e5;
  border-radius: 5px;

  width: 21.3rem;
  height: 13.3rem;

  font-size: 3rem;
`;
