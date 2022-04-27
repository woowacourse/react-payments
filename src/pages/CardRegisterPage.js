import React from 'react';
import { useState } from 'react';

import { Card } from '../components/common/Card';
import { CardExpireDateInputForm } from '../components/cardRegister/CardExpireDateInputForm';
import { CardNumbersInputForm } from '../components/cardRegister/CardNumbersInputForm';
import { CardOwnerInputForm } from '../components/cardRegister/CardOwnerInputForm';
import { CardPasswordInputForm } from '../components/cardRegister/CardPasswordInputForm';
import { CVCInputForm } from '../components/cardRegister/CVCInputForm';

export const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState({
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    fourthNumber: '',
  });

  const [checkInputs, setCheckInputs] = useState({
    cardNumbers: false,
    cardExpireDate: false,
    cardOwner: false,
    cardCVC: false,
    cardPassword: false,
  });

  return (
    <>
      <Card cardNumbers={cardNumbers} />
      <CardNumbersInputForm
        cardNumbers={cardNumbers}
        handleCardNumbersInput={setCardNumbers}
      />
      <CardExpireDateInputForm />
      <CardOwnerInputForm />
      <CVCInputForm />
      <CardPasswordInputForm />
    </>
  );
};
