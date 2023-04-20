import { useContext, useMemo, useState } from "react";
import Card from "src/components/@common/Card";
import Layout from "src/components/@common/Layout";
import CardRegisterForm from "src/components/registerForm/cardRegisterForm";
import { inputValuesContext } from "src/InputValueContext";

function CardRegister() {
  const [inputValueContext] = useContext(inputValuesContext);
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
      <inputValuesContext.Provider value={[cardInput, setCardInput]}>
        {cardPreview}
        <CardRegisterForm />
      </inputValuesContext.Provider>
    </Layout>
  );
}

export default CardRegister;
