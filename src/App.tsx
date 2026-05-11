import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";
import { useCardForm } from "./hooks/useCardForm";
import styled from "@emotion/styled";
import { SubmitButton } from "./components/SubmitButton";
import { isCardFormComplete } from "./utils/validators";
import { SubmitSuccess } from "./components/SubmitSuccess";
import { Route, Routes } from "react-router-dom";

const View = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px;
`;

function App() {
  const { cardFormState, brand, handleSetFormState } = useCardForm();

  return (
    <Routes>
      <Route
        path="/react-payments"
        element={
          <View>
            <CardPreview
              cardBrand={brand}
              cardNumberSegments={cardFormState.cardNumberSegments}
              expiryMonth={cardFormState.expiryMonth}
              expiryYear={cardFormState.expiryYear}
              cardCompany={cardFormState.cardCompany}
            />
            <CardForm
              formState={cardFormState}
              setFormState={handleSetFormState}
              brand={brand}
            />
            <SubmitButton
              isCardFormComplete={isCardFormComplete(cardFormState, brand)}
            />
          </View>
        }
      />
      <Route
        path="/react-payments/success"
        element={
          <SubmitSuccess
            firstNumberSegment={cardFormState.cardNumberSegments[0]}
            cardCompany={cardFormState.cardCompany}
          />
        }
      />
    </Routes>
  );
}

export default App;
