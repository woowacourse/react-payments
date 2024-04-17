import { useState } from 'react';
// import CardView from '../components/Card';
import InputForm from '../components/InputForm';
import { Card } from '../types/card';

export default function EnrollCard() {
  const [cardInfo, setCardInfo] = useState<Card>({
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
    month: '',
    year: '',
    userName: '',
  });
  return (
    <>
      <CardView cardInfo={cardInfo} />
      <InputForm cardInfo={cardInfo} handleInput={setCardInfo} />
    </>
  );
}
