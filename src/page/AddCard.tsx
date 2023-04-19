import { useState } from "react";
import { CardItem } from "../components/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardForm } from "../components/CardForm";
import { Link } from "react-router-dom";

export const AddCard = () => {
  const [cardInfo, setCardInfo] = useState<CardType>({
    numbers: "",
    owner: "",
    expiryDate: "MM/YY",
    color: "#333333",
    CVC: 123,
    password: [0, 0],
  });

  return (
    <>
      <HeaderWrapper>
        <Link to={"/"}>
          <BackButton> «</BackButton>
        </Link>
        <Header text="카드 추가" />
      </HeaderWrapper>
      <Main>
        <CardItem card={cardInfo} />
        <CardForm cardInfo={cardInfo} setCardInfo={setCardInfo} />
      </Main>
    </>
  );
};

const BackButton = styled.button`
  position: absolute;
  font-size: 24px;
  padding: 13px 0 0 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 28px;
`;
