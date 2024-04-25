import { FormEvent, useState } from "react";
import CardNumbers from "../CardNumbers/CardNumbers";
import CardExpirationDate from "../CardExpirationDate/CardExpirationDate";
import CardOwnerName from "../CardOwnerName/CardOwnerName";
import CardPreview from "../CardPreview/CardPreview";
import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import * as S from "./style";

const initialCardInfo = {
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
};

type cardFormStep =
  | "cardNumbers"
  | "cardDates"
  | "cardCompany"
  | "cardOwnerName"
  | "submit";

const isComplete = (info: CardInformation) => {
  // step 넘어가는 것과 submitButton 활성화 체크를 위한 메서드
  // 하지만 cardNumbers만 바꾸는데 모두 체크하는 것은 비효율적이지 않을까
  const {
    cardNumbers,
    cardExpirationMonth,
    cardExpirationYear,
    cardOwnerName,
    cardCompany,
  } = info;

  const cardNumbersComplete = cardNumbers.every(
    (card) => card.value !== "" && !card.isError
  );
  const cardExpirationComplete =
    cardExpirationMonth.value !== "" &&
    !cardExpirationMonth.isError &&
    cardExpirationYear.value !== "" &&
    !cardExpirationYear.isError;
  const cardOwnerNameComplete =
    cardOwnerName.value !== "" && !cardOwnerName.isError;
  const cardCompanyComplete = cardCompany.value !== "" && !cardCompany.isError;

  return {
    cardNumbersComplete,
    cardExpirationComplete,
    cardOwnerNameComplete,
    cardCompanyComplete,
  };
};

export default function CardEnroll() {
  const [cardInformation, setCardInformation] = useState(initialCardInfo);
  const [step, setStep] = useState([true, false, false, false, false]);
  const [previewStatus, setPreviewStatus] = useState<"front" | "back">("front");
  const [submitButton, setSubmitButton] = useState(false);

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

  const changeNextStep = (index: number) => {
    const newStep = [...step];

    newStep[index] = true;
    setStep(newStep);
    console.log(step);
  };

  const handleNext = (currentStep: string) => {
    const completionStatus = isComplete(cardInformation);

    if (
      completionStatus.cardNumbersComplete === true &&
      completionStatus.cardCompanyComplete === true &&
      completionStatus.cardExpirationComplete === true &&
      completionStatus.cardOwnerNameComplete === true
    ) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }

    switch (currentStep) {
      case "cardNumbers":
        if (completionStatus.cardNumbersComplete) changeNextStep(1);
        break;
      case "cardCompany":
        if (completionStatus.cardCompanyComplete) changeNextStep(2);
        break;
      case "cardDates":
        if (completionStatus.cardExpirationComplete) changeNextStep(3);
        break;
      case "cardOwnerName":
        if (completionStatus.cardOwnerNameComplete) changeNextStep(4);
        break;
      default:
        changeNextStep(0);
    }
  };

  return (
    <S.CardEnrollContainer>
      <CardPreview
        cardInformation={cardInformation}
        previewStatus={previewStatus}
      />
      <S.CardForm onSubmit={onSubmitCardInfo}>
        {step[3] && (
          <CardOwnerName
            cardOwnerName={cardInformation.cardOwnerName}
            onChangeCardInfo={onChangeCardInfo}
            onNext={() => handleNext("cardOwnerName")}
          />
        )}
        {step[2] && (
          <CardExpirationDate
            cardExpirationMonth={cardInformation.cardExpirationMonth}
            cardExpirationYear={cardInformation.cardExpirationYear}
            onChangeCardInfo={onChangeCardInfo}
            onNext={() => handleNext("cardDates")}
          />
        )}
        {step[1] && (
          <CardCompanySelect
            cardCompany={cardInformation.cardCompany}
            onChangeCardInfo={onChangeCardInfo}
            onNext={() => handleNext("cardCompany")}
          />
        )}
        {step[0] && (
          <CardNumbers
            cardNumbers={cardInformation.cardNumbers}
            onChangeCardInfo={onChangeCardInfo}
            onNext={() => handleNext("cardNumbers")}
          />
        )}
        <button type="submit" disabled={!submitButton}>
          확인
        </button>
      </S.CardForm>
    </S.CardEnrollContainer>
  );
}
