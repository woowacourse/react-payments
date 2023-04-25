import { useState } from 'react';

const useCardRegisterStates = () => {
  const [cardNumber1, setCardNumber1] = useState('');
  const [cardNumber2, setCardNumber2] = useState('');
  const [cardNumber3, setCardNumber3] = useState('');
  const [cardNumber4, setCardNumber4] = useState('');

  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');

  const [owner, setOwner] = useState('');

  const [cvc, setCvc] = useState('');

  const [cardPassword1, setCardPassword1] = useState('');
  const [cardPassword2, setCardPassword2] = useState('');

  const formSetStates = {
    cardNumber1: setCardNumber1,
    cardNumber2: setCardNumber2,
    cardNumber3: setCardNumber3,
    cardNumber4: setCardNumber4,
    expiredMonth: setExpiredMonth,
    expiredYear: setExpiredYear,
    owner: setOwner,
    cvc: setCvc,
    cardPassword1: setCardPassword1,
    cardPassword2: setCardPassword2,
  };

  const isFormStateName = (name: string): name is keyof typeof formSetStates =>
    name in formSetStates;

  const getTargetSetState = (name: keyof typeof formSetStates) =>
    formSetStates[name];

  return {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    expiredMonth,
    expiredYear,
    owner,
    cvc,
    cardPassword1,
    cardPassword2,
    isFormStateName,
    getTargetSetState,
  };
};

export default useCardRegisterStates;
