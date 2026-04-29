import { useState } from "react";
import { Card } from "./components/Card.tsx";
import { CardForm } from "./components/form/CardForm.tsx";
import styled from "@emotion/styled";

function App() {
  const [cardNumber, setCardNumber] = useState({
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  });

  return (
    <AppContainer>
      <Card />
      <CardForm cardNumber={cardNumber} setCardNumber={setCardNumber} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;
