import styles from "./AddCardPage.module.css";
import AddCardForm from "@/AddCard/AddCardForm/components/AddCardForm";
import AddCardPreview from "@/AddCard/AddCardPreview/components/AddCardPreview";
import useAddCard from "@/AddCard/hooks/useAddCard";

function AddCardPage() {
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

export default AddCardPage;
