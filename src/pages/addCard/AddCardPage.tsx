import styles from "./AddCardPage.module.css";
import AddCardForm from "@/pages/addCard/components/AddCardForm/components/AddCardForm";
import AddCardPreview from "@/pages/addCard/components/AddCardPreview/components/AddCardPreview";
import useAddCard from "@/pages/addCard/hooks/useAddCard";

function AddCardPage() {
  const {
    addCardState,
    previewState: {
      cardType,
      cardNumberState,
      expireDate,
      cardOwner,
      CVCState,
    },
  } = useAddCard();

  return (
    <div className={styles.container}>
      <AddCardPreview
        cardType={cardType}
        cardNumberState={cardNumberState}
        expireDate={expireDate}
        cardOwner={cardOwner}
        CVCState={CVCState}
      />
      <AddCardForm addCardState={addCardState} />
    </div>
  );
}

export default AddCardPage;
