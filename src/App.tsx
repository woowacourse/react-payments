import { useState } from "react";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";
import { getCardBrand } from "./utils/getCardBrand";
import { CARD_BRAND_CONFIGS, DEFAULT_SEGMENT_LENGTHS, type CardFormState } from "./types";
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

function splitIntoSegments(fullNumber: string, lengths: number[]): string[] {
  const segments: string[] = [];
  let pos = 0;
  for (const len of lengths) {
    segments.push(fullNumber.slice(pos, pos + len));
    pos += len;
  }
  return segments;
}

function App() {
  const [formState, setFormState] = useState({
    cardCompany: "",
    cardNumberSegments: [""],
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
    cardPassword: "",
  });

  const brand = getCardBrand(formState.cardNumberSegments);

  const handleSetFormState = (newState: CardFormState) => {
    const newBrand = getCardBrand(newState.cardNumberSegments);
    const fullNumber = newState.cardNumberSegments.join("");

    if (fullNumber.length >= 4) {
      const segmentLengths = newBrand
        ? CARD_BRAND_CONFIGS[newBrand].segmentLengths
        : DEFAULT_SEGMENT_LENGTHS;
      const newSegments = splitIntoSegments(fullNumber, segmentLengths);
      setFormState({ ...newState, cardNumberSegments: newSegments });
    } else {
      setFormState({ ...newState, cardNumberSegments: [fullNumber] });
    }
  };

  return (
    <Routes>
      <Route
        path="/react-payments"
        element={
          <View>
            <CardPreview
              cardBrand={brand}
              cardNumberSegments={formState.cardNumberSegments}
              expiryMonth={formState.expiryMonth}
              expiryYear={formState.expiryYear}
              cardCompany={formState.cardCompany}
            />
            <CardForm
              formState={formState}
              setFormState={handleSetFormState}
              brand={brand}
            />
            <SubmitButton
              isCardFormComplete={isCardFormComplete(formState, brand)}
            />
          </View>
        }
      />
      <Route
        path="/react-payments/success"
        element={
          <SubmitSuccess
            firstNumberSegment={formState.cardNumberSegments[0]}
            cardCompany={formState.cardCompany}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
