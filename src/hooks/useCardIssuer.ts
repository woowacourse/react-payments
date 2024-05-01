import { useState } from "react";

export default function useCardIssuer() {
  const [cardIssuer, setCardIssuer] = useState("");

  const isCardIssuerComplete = cardIssuer !== "";

  return { cardIssuerValue: cardIssuer, setCardIssuer, isCardIssuerComplete };
}
