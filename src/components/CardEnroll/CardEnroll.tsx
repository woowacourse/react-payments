import { FormEvent, useState } from "react";
import CardNumbers from "../CardNumbers/CardNumbers";
import CardExpirationDate from "../CardExpirationDate/CardExpirationDate";
import CardOwnerName from "../CardOwnerName/CardOwnerName";
import CardPreview from "../CardPreview";
import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import * as S from "./style";
import CardCVC from "../CardCVC/CardCVC";
import useCardForm from "../../hooks/useCardForm";

export default function CardEnroll() {
  const [previewStatus, setPreviewStatus] = useState<"front" | "back">("front");
  const [submitButton, setSubmitButton] = useState(false);
  const {
    step,
    cardNumbers,
    cardCompany,
    cardExpirationMonth,
    cardExpirationYear,
    cardOwnerName,
    cardCVC,
  } = useCardForm();

  const handlePreviewOnFocus = () => {
    setPreviewStatus("back");
  };
  const handlePreviewOnBlur = () => {
    setPreviewStatus("front");
  };

  const onSubmitCardInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.CardEnrollContainer>
      <CardPreview
        cardNumbers={cardNumbers.map((cardNumber) => {
          return cardNumber.value;
        })}
        cardCompany={cardCompany.value}
        cardExpirationMonth={cardExpirationMonth.value}
        cardExpirationYear={cardExpirationYear.value}
        cardOwnerName={cardOwnerName.value}
        cardCVC={cardCVC.value}
        previewStatus={previewStatus}
      />
      <S.CardForm onSubmit={onSubmitCardInfo}>
        {step[4] && (
          <CardCVC
            cardCVC={cardCVC}
            handlePreviewOnFocus={handlePreviewOnFocus}
            handlePreviewOnBlur={handlePreviewOnBlur}
          />
        )}
        {step[3] && <CardOwnerName cardOwnerName={cardOwnerName} />}
        {step[2] && (
          <CardExpirationDate
            cardExpirationMonth={cardExpirationMonth}
            cardExpirationYear={cardExpirationYear}
          />
        )}
        {step[1] && <CardCompanySelect cardCompany={cardCompany} />}
        {step[0] && <CardNumbers cardNumbers={cardNumbers} />}
        <button type="submit" disabled={!submitButton}>
          확인
        </button>
      </S.CardForm>
    </S.CardEnrollContainer>
  );
}
