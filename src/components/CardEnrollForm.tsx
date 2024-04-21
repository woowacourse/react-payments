import { useState } from "react";
import CardNumbers from "./CardNumbers";
import CardExpirationDate from "./CardExpirationDate";
import CardOwnerName from "./CardOwnerName";
import CardPreview from "./CardPreview";
import styled from "styled-components";

const CardEnrollFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`;

const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`;

export default function CardEnrollForm() {
  const [cardInformation, setCardInformation] = useState({
    cardNumbers: [
      { value: "", isError: false },
      { value: "", isError: false },
      { value: "", isError: false },
      { value: "", isError: false },
    ],
    cardExpirationMonth: { value: "", isError: false },
    cardExpirationYear: { value: "", isError: false },
    cardOwnerName: { value: "", isError: false },
  });

  const onChangeCardInfo = (
    inputValue: CardInfoValue | CardInfoValue[],
    inputId: string
  ) => {
    setCardInformation((prev) => ({
      ...prev,
      [inputId]: inputValue,
    }));
  };

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation}></CardPreview>
      <CardInformation>
        <CardNumbers
          cardNumbers={cardInformation.cardNumbers}
          onChangeCardInfo={onChangeCardInfo}
        ></CardNumbers>
        <CardExpirationDate
          cardExpirationMonth={cardInformation.cardExpirationMonth}
          cardExpirationYear={cardInformation.cardExpirationYear}
          onChangeCardInfo={onChangeCardInfo}
        ></CardExpirationDate>
        <CardOwnerName
          cardOwnerName={cardInformation.cardOwnerName}
          onChangeCardInfo={onChangeCardInfo}
        ></CardOwnerName>
      </CardInformation>
    </CardEnrollFormContainer>
  );
}
