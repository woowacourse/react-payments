import "./App.css";
import PreviewCard from "./components/PreviewCard/PreviewCard.tsx";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import CardInformation from "./domain/CardInformation.tsx";

function App() {
  const { cardType, cardInformationState, setCardInformationState } = CardInformation();

  return (
    <div>
      <PreviewCard cardInformationState={cardInformationState} cardType={cardType} />
      <FormContainer cardInformationState={cardInformationState} setCardInformationState={setCardInformationState} />
    </div>
  );
}

export default App;
