import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/common/Header";
import { useState } from "react";
import { getData } from "../utils/localStorage";
import { Card, CardProps } from "../components/common/card";
import { ReactComponent as BackButtonIc } from "../assets/backButtonIc.svg";
import { PAGE_HEADER } from "../constants";
import { PATH } from "../constants/path";

export function CardListPage() {
  const [cards] = useState<CardProps[] | undefined>(getData());
  const navigate = useNavigate();

  function moveAddCardPage() {
    navigate(PATH.ADD_CARD);
  }

  function checkDataExist() {
    return cards?.length !== 0;
  }

  return (
    <CardListContainer>
      <Header>
        <BackButtonIc />
        {PAGE_HEADER.CARD_LIST}
      </Header>
      <Section>
        {checkDataExist() ? (
          cards?.map((card) => {
            return (
              <Card
                key={card.userName}
                cardNumber={card.cardNumber}
                month={card.month}
                year={card.year}
                userName={card.userName}
                cardColor={card.cardColor}
                bank={card.bank}
              />
            );
          })
        ) : (
          <h3>새로운 카드를 추가하세요</h3>
        )}
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
