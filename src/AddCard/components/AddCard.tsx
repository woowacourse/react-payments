import styles from "./AddCard.module.css";
import AddCardForm from "./AddCardForm/components/AddCardForm";
import useAddCard from "../hooks/useAddCard";
import AddCardPreview from "./AddCardPreview/components/AddCardPreview";

function AddCard() {
  const {
    addCardState,
    previewState: { cardNumberState, expireDate },
  } = useAddCard();

  return (
    <div className={styles.container}>
      <AddCardPreview
        cardNumberState={cardNumberState}
        expireDate={expireDate}
      />
      <AddCardForm addCardState={addCardState} />
    </div>
  );
}

export default AddCard;
