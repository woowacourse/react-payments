import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import { useRef } from 'react';
import Card from '../components/Card/Card';

interface RefType {
  [key: number]: React.RefObject<HTMLInputElement>;
}

const AddCard = () => {
  const cardNumberRefs: RefType = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
  };

  const cardExpiredDateRefs: RefType = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const cardOwnerNameRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Card></Card>
      <CardNumbers refs={cardNumberRefs} />
      <ExpiredDate refs={cardExpiredDateRefs} />
      <CardOwnerName nameRef={cardOwnerNameRef} />
      <SecurityCode />
      <CardPassword />
    </>
  );
};

export default AddCard;
