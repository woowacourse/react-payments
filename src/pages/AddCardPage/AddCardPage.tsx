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

function AddCardPage() {
  const { cardNumbers, cardType, cardNumbersError, handleChange } =
    useCardNumbersState();
  const { cardExpirationDate, cardExpirationDateError, dateValidate } =
    useExpirationDateState();
  const { selectedCompany, selectCompany } = useCardCompanyState();

  const [cvcCompleted, setCvcCompleted] = useState(false);
  const [passwordCompleted, setPasswordCompleted] = useState(false);

  const [step, setStep] = useState(1);
  const goToStep = (targetStep: number) => {
    setStep(targetStep);
  };

  const isAllCompleted =
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
        cardNumbers={{
          first: cardNumbers[0],
          second: cardNumbers[1],
          third: cardNumbers[2],
          fourth: cardNumbers[3],
        }}
        cardType={cardType}
        cardExpirationDate={cardExpirationDate}
      />
      <div className={styles["card-input"]}>
        <CardNumber
          handleChange={handleChange}
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersError}
          onComplete={() => goToStep(2)}
        />
        {step >= 2 && (
          <CardCompanyPicker
            selectedCompany={selectedCompany}
            selectCompany={selectCompany}
            onComplete={() => goToStep(3)}
          />
        )}
        {step >= 3 && (
          <CardExpirationDate
            handleChange={dateValidate}
            cardExpirationDate={cardExpirationDate}
            errorMessage={cardExpirationDateError}
            onComplete={() => goToStep(4)}
          />
        )}
        {step >= 4 && (
          <CardCvcNumber
            setCompleted={setCvcCompleted}
            onComplete={() => goToStep(5)}
          />
        )}

        {step >= 5 && (
          <CardPassword
            setCompleted={setPasswordCompleted}
            onComplete={() => goToStep(6)}
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
