import { useState } from "react";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";
import { useCardNumberSegments } from "./hooks/useCardNumberSegments";
import type { CardFormState } from "./types";
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
  const { segments, brand, handleChange: handleCardNumberChange } =
    useCardNumberSegments();

  const [formState, setFormState] = useState({
    cardCompany: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
    cardPassword: "",
  });

  const cardFormState: CardFormState = {
    ...formState,
    cardNumberSegments: segments,
  };

  const handleSetFormState = (newState: CardFormState) => {
    handleCardNumberChange(newState.cardNumberSegments);
    setFormState({
      cardCompany: newState.cardCompany,
      expiryMonth: newState.expiryMonth,
      expiryYear: newState.expiryYear,
      cvc: newState.cvc,
      cardPassword: newState.cardPassword,
    });
  };

  return (
    <Routes>
      <Route
        path="/react-payments"
        element={
          <View>
            <CardPreview
              cardBrand={brand}
              cardNumberSegments={segments}
              expiryMonth={formState.expiryMonth}
              expiryYear={formState.expiryYear}
              cardCompany={formState.cardCompany}
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
            firstNumberSegment={segments[0]}
            cardCompany={formState.cardCompany}
          />
        }
      />
    </Routes>
  );
}

export default App;
