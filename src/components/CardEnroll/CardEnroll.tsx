import { FormEvent, useState } from "react";
import CardNumbers from "../CardNumbers/CardNumbers";
import CardExpirationDate from "../CardExpirationDate/CardExpirationDate";
import CardOwnerName from "../CardOwnerName/CardOwnerName";
import CardPreview from "../CardPreview/CardPreview";
import * as S from "./style";
import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";

export default function CardEnroll() {
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
    cardCompany: { value: "", isError: false },
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

  const onSubmitCardInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.CardEnrollContainer>
      <CardPreview cardInformation={cardInformation} />
      <S.CardForm onSubmit={onSubmitCardInfo}>
        <CardCompanySelect
          cardCompany={cardInformation.cardCompany}
          onChangeCardInfo={onChangeCardInfo}
        />
        <CardNumbers
          cardNumbers={cardInformation.cardNumbers}
          onChangeCardInfo={onChangeCardInfo}
        />
        <CardExpirationDate
          cardExpirationMonth={cardInformation.cardExpirationMonth}
          cardExpirationYear={cardInformation.cardExpirationYear}
          onChangeCardInfo={onChangeCardInfo}
        />
        <CardOwnerName
          cardOwnerName={cardInformation.cardOwnerName}
          onChangeCardInfo={onChangeCardInfo}
        />
        <button type="submit">확인</button>
      </S.CardForm>
    </S.CardEnrollContainer>
  );
}
