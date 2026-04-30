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

  const [networkBrand, setNetworkBrand] = useState("");

  return (
    <AppContainer>
      <CardPreview
        cardNumber={cardNumber}
        cardExpiryDate={cardExpiryDate}
        networkBrand={networkBrand}
      />
      <CardForm
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardExpiryDate={cardExpiryDate}
        setCardExpiryDate={setCardExpiryDate}
        setNetworkBrand={setNetworkBrand}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;
