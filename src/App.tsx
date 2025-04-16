import "./App.css";
import Card from "./domain/Card.ts";
import { useState } from "react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";

function App() {
  const cardInstance = new Card();
  const [cardInformationState, setCardInformationState] = useState(cardInstance.information);
  return (
    <>
      {/* PreviewCard */}
      <FormContainer cardInformationState={cardInformationState} setCardInformationState={setCardInformationState} />
    </>
  );
}

export default App;
