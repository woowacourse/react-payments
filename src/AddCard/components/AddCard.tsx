import AddCardForm from "./AddCardForm/components/AddCardForm";
import useAddCard from "../hooks/useAddCard";

function AddCard() {
  const { addCardState, previewState } = useAddCard();

  return (
    <>
      <div>Preview</div>
      <AddCardForm addCardState={addCardState} />
    </>
  );
}

export default AddCard;
