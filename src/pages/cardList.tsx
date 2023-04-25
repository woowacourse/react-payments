import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/common/Header";
import { useEffect, useState } from "react";
import { CardInfo, CardItem } from "../components/common/cardItem";

export function CardList() {
  const [cards, setCards] = useState<CardInfo[]>();

  function getCardList() {
    const data = fetch("http://localhost:4002/data/", {
      method: "GET",
    }).then((response) => {
      response.json();
    });

    return data;
  }

  const navigate = useNavigate();
  function moveAddCardPage() {
    navigate("/add-card");
  }
  useEffect(() => {
    console.log(getCardList());
  }, []);

  return (
    <CardListContainer>
      <Header title="보유 카드" />
      <Section>
        <h3>{cards?.length === 0 ? "새로운 카드를 추가하세요" : ""}</h3>
        {cards &&
          cards?.map((card) => {
            return (
              <CardItem
                key={card.userName}
                cardNumber={card?.cardNumber}
                date={card?.date}
                userName={card?.userName}></CardItem>
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
