import styles from "./AddCard.module.css";
import { STEP_LABELS } from "../constants";
import AddCardForm from "./AddCardForm/components/AddCardForm";
import AddCardPreview from "./AddCardPreview/components/AddCardPreview";
import ProgressBar from "@/components/Progressbar/ProgressBar";
import useCardRegistrationFlow from "../hooks";

function AddCard() {
  const { state, previewState, currentStep, allValid } =
    useCardRegistrationFlow();
  const { cardNumberState, expireDate, selectedBrand } = previewState;

  return (
    <div className={styles.container}>
      <ProgressBar
        currentStep={currentStep}
        allValid={allValid}
        stepLabels={STEP_LABELS}
      />
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
