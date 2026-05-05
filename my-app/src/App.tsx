import React, { useState } from "react"
import CardPreview from "./components/cardPreview/CardPreview";
import CardNumberSection from "./components/cardNumberSection/CardNumberSection";
import ExpirationDateSection from "./components/expirationDateSection/ExpirationDateSection";
import CvcSection from "./components/cvcSection/CvcSection";
import { AppContainer, FormLayout } from "./App.styles";

function App() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <AppContainer>
      <CardPreview cardNumber={cardNumber} expirationDate={expirationDate} />
      <FormLayout onSubmit={handleSubmit}>
        <CardNumberSection value={cardNumber} setValue = {setCardNumber} />
        <ExpirationDateSection value={expirationDate} setValue={setExpirationDate} />
        <CvcSection value={cvc} setValue={setCvc} />
      </FormLayout>
    </AppContainer>
  );
}

export default App
