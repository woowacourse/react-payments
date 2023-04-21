import { useContext, useMemo, useState } from 'react';
import Card from '../components/@common/Card';
import { InputValuesContext } from '../components/registerForm/InputValueContext';
import CardRegisterForm from '../components/registerForm/cardRegisterForm';

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
    [cardInput.cardNumbers, cardInput.expireDate, cardInput.ownerName]
  );

  return (
    <InputValuesContext.Provider value={[cardInput, setCardInput]}>
      {cardPreview}
      <CardRegisterForm />
    </InputValuesContext.Provider>
  );
}

export default CardRegister;
