import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import { useEffect, useRef, useState } from 'react';
import Card from '../components/Card/Card';

interface RefType {
  [key: number]: React.RefObject<HTMLInputElement>;
}
interface CardNumbers {
  [key: number]: string;
}

const AddCard = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const cardExpiredDateRefs: RefType = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const cardOwnerNameRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Card
        cardNumbers={cardNumbers}
        cardExpiredDateRefs={cardExpiredDateRefs}
        cardOwnerNameRef={cardOwnerNameRef}
      ></Card>
      <CardNumbers cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      <ExpiredDate refs={cardExpiredDateRefs} />
      <CardOwnerName nameRef={cardOwnerNameRef} />
      <SecurityCode />
      <CardPassword />
    </>
  );
};

export default AddCard;
