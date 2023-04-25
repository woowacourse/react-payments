import { useContext, useMemo, useState } from "react";
import Card from "src/components/@common/card";
import Layout from "src/components/@common/Layout";
import CardRegisterForm from "src/components/registerForm/cardRegisterForm";
import { cardInfoContext } from "src/context/CardInfoContext";

function CardRegister() {
  const [inputValueContext] = useContext(cardInfoContext);
  const [cardInput, setCardInput] = useState(inputValueContext);

  const cardPreview = useMemo(
    () => (
      <Card
        cardNumber={cardInput.cardNumbers}
        expireDate={cardInput.expireDate}
        ownerName={cardInput.ownerName}
      />
    ),
    [cardInput.cardNumbers, cardInput.expireDate, cardInput.ownerName],
  );

  return (
    <Layout>
      <cardInfoContext.Provider value={[cardInput, setCardInput]}>
        {cardPreview}
        <CardRegisterForm />
      </cardInfoContext.Provider>
    </Layout>
  );
}

export default CardRegister;
