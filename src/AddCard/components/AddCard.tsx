import styles from "./AddCard.module.css";
import AddCardForm from "./AddCardForm/components/AddCardForm";
import useCardRegistrationFlow from "../hooks/useCardRegistrationFlow";
import AddCardPreview from "./AddCardPreview/components/AddCardPreview";

function AddCard() {
  const {
    state,
    previewState: { cardNumberState, expireDate, selectedBrand },
    currentStep,
    allValid,
  } = useCardRegistrationFlow();

  return (
    <div className={styles.container}>
      <AddCardPreview
        cardNumberState={cardNumberState}
        expireDate={expireDate}
        selectedBrand={selectedBrand}
      />
      <AddCardForm addCardState={state} currentStep={currentStep} />
      {allValid && <p>카드 하나 만드시죠!</p>}
    </div>
  );
}

export default AddCard;
