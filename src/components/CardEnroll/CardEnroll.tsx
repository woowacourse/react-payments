import { FormEvent, useState } from "react";
import CardNumbers from "../CardNumbers/CardNumbers";
import CardExpirationDate from "../CardExpirationDate/CardExpirationDate";
import CardOwnerName from "../CardOwnerName/CardOwnerName";
import CardPreview from "../CardPreview";
import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import * as S from "./style";
import CardCVC from "../CardCVC/CardCVC";

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
  cardCVC: { value: "", isError: false },
};

const isComplete = (info: CardInformation) => {
  // step 넘어가는 것과 submitButton 활성화 체크를 위한 메서드
  // 하지만 cardNumbers만 바꾸는데 모두 체크하는 것은 비효율적이지 않을까
  const {
    cardNumbers,
    cardExpirationMonth,
    cardExpirationYear,
    cardOwnerName,
    cardCompany,
    cardCVC,
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
  const cardCVCComplete = cardCVC.value !== "" && !cardCVC.isError;

  return {
    cardNumbersComplete,
    cardExpirationComplete,
    cardOwnerNameComplete,
    cardCompanyComplete,
    cardCVCComplete,
  };
};

export default function CardEnroll() {
  const [cardInformation, setCardInformation] = useState(initialCardInfo);
  const [step, setStep] = useState([true, false, false, false, false, false]);
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
  };

  const handleNext = (currentStep: string) => {
    const completionStatus = isComplete(cardInformation);

    if (
      completionStatus.cardNumbersComplete === true &&
      completionStatus.cardCompanyComplete === true &&
      completionStatus.cardExpirationComplete === true &&
      completionStatus.cardOwnerNameComplete === true &&
      completionStatus.cardCVCComplete === true
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
      case "cardCVC":
        if (completionStatus.cardCVCComplete) changeNextStep(5);
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
        {step[5] && <div>hi</div>}
        {step[4] && (
          <CardCVC
            cardCVC={cardInformation.cardCVC}
            onChangeCardInfo={onChangeCardInfo}
            onNext={() => {
              handleNext("cardCVC");
              setPreviewStatus("front");
            }}
          />
        )}
        {step[3] && (
          <CardOwnerName
            cardOwnerName={cardInformation.cardOwnerName}
            onChangeCardInfo={onChangeCardInfo}
            onNext={() => {
              handleNext("cardOwnerName");
              setPreviewStatus("back");
            }}
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
