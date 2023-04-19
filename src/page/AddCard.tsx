import { useState } from "react";
import { CardItem } from "../components/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardNumberInput } from "../components/CardNumberInput";

export const AddCard = () => {
  const [cardInfo, setCardInfo] = useState<CardType>({
    numbers: "",
    owner: "NAME",
    expiryDate: "MM/YY",
    color: "#333333",
  });

  return (
    <>
      <Header text="카드 추가" />
      <Main>
        <CardItem card={cardInfo} />
        <CardNumberInput
          setCardNumbers={(numbers: string) => {
            setCardInfo({ ...cardInfo, numbers: numbers });
          }}
          cardNumbers={cardInfo.numbers}
        />
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px;
`;
