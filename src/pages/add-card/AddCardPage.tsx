import styles from "./AddCardPage.module.css";
import AddCardForm from "./components/AddCardForm/components/AddCardForm";
import AddCardPreview from "./components/AddCardPreview/components/AddCardPreview";
import useAddCard from "./hooks/useAddCard";

function AddCardPage() {
  const {
    addCardState,
    previewState: { cardType, cardNumberState, expireDate, CVCState },
  } = useAddCard();

  return (
    <div className={styles.container}>
      <AddCardPreview
        cardType={cardType}
        cardNumberState={cardNumberState}
        expireDate={expireDate}
        CVCState={CVCState}
      />
      <AddCardForm addCardState={addCardState} />
    </div>
  );
}

export default AddCardPage;
