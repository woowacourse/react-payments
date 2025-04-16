import useAddCard from "./hooks/useAddCard";
import AddCardForm from "./Card/AddCardForm/components/AddCardForm";

function App() {
  const { addCardState, previewState } = useAddCard();

  return (
    <>
      <div>Preview</div>
      <AddCardForm addCardState={addCardState} />
    </>
  );
}

export default App;
