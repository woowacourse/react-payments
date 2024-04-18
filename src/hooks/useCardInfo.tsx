import { useState } from "react";

interface CardInfo {
  cardNumbers: [string, string, string, string];
  cardIssuer: "" | "Visa" | "MasterCard";
  cardExpiredDate: [string, string];
  cardHolder: string;
}

export default function useCardInfo() {
  const [cardNumbers, setCardNumbers] = useState<CardInfo["cardNumbers"]>([
    "",
    "",
    "",
    "",
  ]);
  const [cardIssuer, setCardIssuer] = useState<CardInfo["cardIssuer"]>("");
  const [cardExpiredDate, setCardExpiredDate] = useState<
    CardInfo["cardExpiredDate"]
  >(["", ""]);
  const [cardHolder, setCardHolder] = useState("");

  const cardInfo = {
    cardNumbers,
    cardIssuer,
    cardExpiredDate,
    cardHolder,
  };

  return {
    cardInfo,
    setCardNumbers,
    setCardIssuer,
    setCardExpiredDate,
    setCardHolder,
  };
}
