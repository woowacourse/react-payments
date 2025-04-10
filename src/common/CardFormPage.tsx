import { useState } from "react";
import CardView from "../components/CardView";
import CardOwner from "../components/CardOwner";
import CardInputNumber from "../components/CardInputNumber";
import CardExpiration from "../components/CardExpiration";

function CardFormPage() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [expiration, setExpiration] = useState("");
  const [owner, setOwner] = useState("");

  const handleNumberChange = (value: string, position: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[position] = value;
    setCardNumbers(newCardNumbers);
  };

  return (
    <div>
      <CardView
        cardNumbers={cardNumbers}
        cardExpiration={expiration}
        cardOwner={owner}
      />
      <CardInputNumber 
        values={cardNumbers}
        onChange={handleNumberChange}
      />
      <CardExpiration value={expiration} onChange={setExpiration} />
      <CardOwner value={owner} onChange={setOwner} />
    </div>
  );
}

export default CardFormPage;
