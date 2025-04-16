import AddCardForm from "./AddCardForm/components/AddCardForm";
import useAddCard from "../hooks/useAddCard";
import AddCardPreview from "./AddCardPreview/components/AddCardPreview";

function AddCard() {
  const { addCardState, previewState } = useAddCard();
  const { cardNumberState, expireDate } = previewState;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        width: "650px",
        margin: "3rem auto 0",
      }}
    >
      <AddCardPreview
        cardNumberState={cardNumberState}
        expireDate={expireDate}
      />
      <AddCardForm addCardState={addCardState} />
    </div>
  );
}

export default AddCard;
