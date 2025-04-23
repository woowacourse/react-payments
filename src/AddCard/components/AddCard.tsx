import styles from "./AddCard.module.css";
import AddCardForm from "./AddCardForm/components/AddCardForm";
import AddCardPreview from "./AddCardPreview/components/AddCardPreview";

import useCardRegistrationFlow from "../hooks/useCardRegistrationFlow";

function AddCard() {
  const { state, previewState, currentStep, allValid } =
    useCardRegistrationFlow();
  const { cardNumberState, expireDate, selectedBrand } = previewState;

  return (
    <div className={styles.container}>
      <AddCardPreview
        cardNumberState={cardNumberState}
        expireDate={expireDate}
        selectedBrand={selectedBrand}
      />
      <AddCardForm
        addCardState={state}
        currentStep={currentStep}
        allValid={allValid}
      />
    </div>
  );
}

export default AddCard;
