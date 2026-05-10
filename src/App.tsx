import { useState } from "react";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";
import { getCardBrand } from "./utils/getCardBrand";
import type { CardNumberSegments } from "./types";
import styled from "@emotion/styled";

const View = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px;
`;

function App() {
  const [formState, setFormState] = useState({
    cardCompany: "",
    cardNumberSegments: ["", "", "", ""] as CardNumberSegments,
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
    cardPassword: "",
  });

  console.log(formState);

  const brand = getCardBrand(formState.cardNumberSegments);

  return (
    <View>
      <CardPreview
        cardBrand={brand}
        cardNumberSegments={formState.cardNumberSegments}
        expiryMonth={formState.expiryMonth}
        expiryYear={formState.expiryYear}
        cardCompany={formState.cardCompany}
      />
      <CardForm formState={formState} setFormState={setFormState} />
    </View>
  );
}

export default App;
