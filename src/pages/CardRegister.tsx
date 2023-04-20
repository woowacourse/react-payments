import { useContext, useMemo, useState } from "react";
import Card from "src/components/@common/Card";
import Layout from "src/components/@common/Layout";
import CardRegisterForm from "src/components/RegisterForm/CardRegisterForm";
import { InputValuesContext } from "src/components/RegisterForm/InputValueContext";

function CardRegister() {
  const [inputValueContext] = useContext(InputValuesContext);
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
      <InputValuesContext.Provider value={[cardInput, setCardInput]}>
        {cardPreview}
        <CardRegisterForm />
      </InputValuesContext.Provider>
    </Layout>
  );
}

export default CardRegister;
