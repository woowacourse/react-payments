import { useState } from "react";
import { CardItem } from "../components/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardNumberInput } from "../components/CardNumberInput";
import { ExpiryDateInput } from "../components/ExpiryDateInput";
import { OwnerInput } from "../components/OwnerInput";
import { CVCInput } from "../components/CVCInput";
import { PasswordInput } from "../components/PasswordInput";

export const AddCard = () => {
  const [cardInfo, setCardInfo] = useState<CardType>({
    numbers: "",
    owner: "",
    expiryDate: "MM/YY",
    color: "#333333",
    CVC: 123,
    password: [1, 2],
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
        />
        <ExpiryDateInput
          setExpiryDate={(date: string) => {
            setCardInfo({ ...cardInfo, expiryDate: date });
          }}
        />
        <OwnerInput
          owner={cardInfo.owner}
          setOwner={(owner: string) => {
            setCardInfo({ ...cardInfo, owner: owner });
          }}
        />
        <CVCInput
          setCVC={(CVC: number) => {
            setCardInfo({ ...cardInfo, CVC: CVC });
          }}
        />
        <PasswordInput
          setPassword={(password: number[]) => {
            setCardInfo({ ...cardInfo, password: password });
          }}
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
