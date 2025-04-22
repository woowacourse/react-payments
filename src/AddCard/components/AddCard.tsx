import styles from "./AddCard.module.css";
import AddCardForm from "./AddCardForm/components/AddCardForm";
import useCardRegistrationFlow from "../hooks/useCardRegistrationFlow";
import AddCardPreview from "./AddCardPreview/components/AddCardPreview";

function AddCard() {
  const {
    state,
    previewState: { cardNumberState, expireDate },
    currentStep,
    isStepValid,
  } = useCardRegistrationFlow();

  return (
    <div className={styles.container}>
      <AddCardPreview
        cardNumberState={cardNumberState}
        expireDate={expireDate}
      />
      <AddCardForm
        addCardState={state}
        currentStep={currentStep}
        isStepValid={isStepValid}
      />
      {currentStep === "COMPLETE" && <p>카드 하나 만드시죠!</p>}
    </div>
  );
}

export default AddCard;
