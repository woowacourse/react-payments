import { useEffect } from 'react';

import useCardFormValue from '../../../hooks/useCardFormValue';
import type { CardData } from '../../../types/card';

interface RegisterCard {
  (cardData: CardData): void;
}

const useCardRegister = (registerCard: RegisterCard) => {
  const { name, company, number, owner, expiredDate } = useCardFormValue();

  useEffect(() => {
    if (!company) return;

    const cardData: CardData = {
      name,
      company: company,
      number: { first: number.first, second: number.second },
      expiredDate,
      owner,
    };

    registerCard(cardData);
  }, [
    company,
    expiredDate,
    name,
    number.first,
    number.second,
    owner,
    registerCard,
  ]);
};

export default useCardRegister;
