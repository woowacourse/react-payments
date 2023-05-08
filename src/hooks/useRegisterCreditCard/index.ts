import { useContext, useState } from 'react';

import creditCard from '@Domains/creditCard';
import creditCardStorage from '@Domains/creditCard/creditCardStorage';

import * as Type from '@Types/index';

import { CreditCardRegisterUpdateContext } from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import waitMilliseconds from '@Utils/waitMilliseconds';

import { REGISTER_SPARE_TIME } from '@Constants/creditCard';

const useRegisterCreditCard = (delayTime: number) => {
  const [loading, setLoading] = useState(false);
  const { resetCreditCardValues } = useContext(CreditCardRegisterUpdateContext);

  const registerCreditCard = async (creditCardState: Omit<Type.CreditCard, 'id'>) => {
    const newCreditCard: Type.CreditCard = {
      id: creditCard.issueCreditCardId(),
      numbers: creditCardState.numbers,
      expiry: creditCardState.expiry,
      owner: creditCardState.owner,
      cvc: creditCardState.cvc,
      password: {
        first: creditCardState.password.first,
        second: creditCardState.password.second,
      },
      company: creditCardState.company,
      alias: creditCardState.alias,
    };

    setLoading(true);

    await waitMilliseconds(delayTime + REGISTER_SPARE_TIME);

    creditCardStorage.saveCreditCard(newCreditCard);
    resetCreditCardValues();
    setLoading(false);
  };

  return { loading, registerCreditCard };
};

export default useRegisterCreditCard;
