import { useState } from "react";
import styles from "./AddCardPage.module.css";
import CardCompanyPicker from "../../components/CardCompany/CardCompany";
import CardCvcNumber from "../../components/CardCvcNumber/CardCvcNumber";
import CardExpirationDate from "../../components/CardExpirationDate/CardExpirationDate";
import CardNumber from "../../components/CardNumber/CardNumber";
import CardPassword from "../../components/CardPassword/CardPassword";
import CheckButton from "../../components/CheckButton/CheckButton";
import PreviewCardLayout from "../../components/PreviewCard/PreviewCardLayout";
import useCardCompanyState from "../../hooks/useCardCompany/useCardCompanyState";
import useCardNumbersState from "../../hooks/useCardNumber/useCardNumberState";
import useExpirationDateState from "../../hooks/useExpirationDate/useExpirationDateState";
import { useNavigate } from "react-router";
import {
  CARD_NUMBER_KEYS,
  CardNumberKey,
} from "../../hooks/useCardNumber/useCardNumberInputHandler";

function AddCardPage() {
  const { cardNumbers, cardType, cardNumbersError, handleChange } =
    useCardNumbersState();
  const { cardExpirationDate, cardExpirationDateError, dateValidate } =
    useExpirationDateState();
  const { selectedCompany, selectCompany } = useCardCompanyState();

  const cardNumbersRecord = {} as Record<CardNumberKey, string>;
  const cardNumbersErrorRecord = {} as Record<CardNumberKey, string>;
  CARD_NUMBER_KEYS.forEach((key, index) => {
    cardNumbersRecord[key] = cardNumbers[index] ?? "";
    cardNumbersErrorRecord[key] = cardNumbersError[index] ?? "";
  });

  const [cvcCompleted, setCvcCompleted] = useState(false);
  const [passwordCompleted, setPasswordCompleted] = useState(false);

  enum Step {
    CardNumber = 1,
    CardCompany,
    CardExpirationDate,
    CardCvcNumber,
    CardPassword,
    CheckButton,
  }

  const [step, setStep] = useState<Step>(Step.CardNumber);
  const goToStep = (next: Step) => setStep(next);

  const isAllCompleted =
    Object.values(cardNumbersErrorRecord).every((e) => e === "") &&
    cardNumbersError.every((e) => e === "") &&
    cardExpirationDateError.every((e) => e === "") &&
    cvcCompleted &&
    passwordCompleted &&
    selectedCompany !== null;

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/success", {
      state: {
        cardNumbers,
        selectedCompany,
      },
    });
  };

  return (
    <div className={styles.AddCardPage}>
      <PreviewCardLayout
        selectedCompany={selectedCompany?.value ?? ""}
        cardNumbers={cardNumbersRecord}
        cardType={cardType}
        cardExpirationDate={cardExpirationDate}
      />
      <div className={styles["card-input"]}>
        <CardNumber
          handleChange={(value, key) => {
            const idx = CARD_NUMBER_KEYS.indexOf(key);
            handleChange(value, idx);
          }}
          cardNumbers={cardNumbersRecord}
          errorMessage={cardNumbersErrorRecord}
          onComplete={() => goToStep(Step.CardCompany)}
        />
        {step >= Step.CardCompany && (
          <CardCompanyPicker
            selectedCompany={selectedCompany}
            selectCompany={selectCompany}
            onComplete={() => goToStep(Step.CardExpirationDate)}
          />
        )}
        {step >= Step.CardExpirationDate && (
          <CardExpirationDate
            handleChange={dateValidate}
            cardExpirationDate={cardExpirationDate}
            errorMessage={cardExpirationDateError}
            onComplete={() => goToStep(Step.CardCvcNumber)}
          />
        )}
        {step >= Step.CardCvcNumber && (
          <CardCvcNumber
            setCompleted={setCvcCompleted}
            onComplete={() => goToStep(Step.CardPassword)}
          />
        )}

        {step >= Step.CardPassword && (
          <CardPassword
            setCompleted={setPasswordCompleted}
            onComplete={() => goToStep(Step.CheckButton)}
          />
        )}
      </div>
      <div className={styles["checkButton-container"]}>
        {isAllCompleted && (
          <CheckButton
            className={styles["check-button"]}
            onSubmit={onSubmit}
            text="확인"
          />
        )}
      </div>
    </div>
  );
}

export default AddCardPage;
