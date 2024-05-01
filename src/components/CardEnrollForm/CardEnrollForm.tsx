import { useState } from "react";
import CardNumbers from "../CardNumbers/CardNumbers";
import CardExpirationDate from "../CardExpirationDate/CardExpirationDate";
import CardOwnerName from "../CardOwnerName/CardOwnerName";
import CardPreview from "../CardPreview";
import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import * as S from "./style";
import CardCVC from "../CardCVC/CardCVC";
import useCardForm from "../../hooks/useCardForm";
import CardPassword from "../CardPassword/CardPassword";
import { FormButton } from "../FormButton/FormButton";

export default function CardEnrollForm() {
  const [previewStatus, setPreviewStatus] = useState<"front" | "back">("front");
  const {
    step,
    cardNumbers,
    cardCompany,
    cardExpirationMonth,
    cardExpirationYear,
    cardOwnerName,
    cardCVC,
    cardPassword,
    isCompleted,
    handleSubmit,
  } = useCardForm();

  const handlePreviewOnFocus = () => {
    setPreviewStatus("back");
  };
  const handlePreviewOnBlur = () => {
    setPreviewStatus("front");
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
      <S.CardForm onSubmit={handleSubmit}>
        {step[5] && <CardPassword cardPassword={cardPassword} />}
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
        <FormButton
          type="submit"
          disabled={!isCompleted}
          style={{ display: step[6] ? "block" : "none" }}
        >
          확인
        </FormButton>
      </S.CardForm>
    </S.CardEnrollContainer>
  );
}
