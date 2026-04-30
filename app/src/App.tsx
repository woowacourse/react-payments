import { useState } from "react";
import { CardPreview } from "./components/CardPreview.tsx";
import { CardForm } from "./components/form/CardForm.tsx";
import styled from "@emotion/styled";

function App() {
  const [cardNumber, setCardNumber] = useState({
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  });

  const [cardExpiryDate, setCardExpiryDate] = useState({
    "expiry-month": "",
    "expiry-year": "",
  });

  return (
    <AppContainer>
      <CardPreview />
      <CardForm
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardExpiryDate={cardExpiryDate}
        setCardExpiryDate={setCardExpiryDate}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;
