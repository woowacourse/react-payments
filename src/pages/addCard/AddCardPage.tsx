import styles from "./AddCardPage.module.css";
import AddCardForm from "@/pages/addCard/components/AddCardForm/components/AddCardForm";
import AddCardPreview from "@/pages/addCard/components/AddCardPreview/components/AddCardPreview";
import useAddCard from "@/pages/addCard/hooks/useAddCard";

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
