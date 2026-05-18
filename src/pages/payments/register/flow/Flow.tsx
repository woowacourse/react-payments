import { Outlet, useNavigate } from 'react-router';

import { ROUTES } from '@/constants/routes';

import { postCards } from '@/services/apis/cards/cards';

import { ISSUER_CODE } from '@/pages/payments/cards/list/constants';

import { useCardNumbers } from '../form/hooks/useCardNumbers';
import { useCard } from '../form/hooks/useCard';
import { useExpirationDate } from '../form/hooks/useExpirationDate';
import { useCvc } from '../form/hooks/useCvc';
import { usePassword } from '../form/hooks/usePassword';

import { getBrandCard } from '../form/utils';

export const Flow = () => {
  const cardNumbers = useCardNumbers();

  const card = useCard();

  const expirationDate = useExpirationDate();

  const cvc = useCvc();

  const password = usePassword();

  const brandCard = getBrandCard(Object.values(cardNumbers.values));

  const navigate = useNavigate();

  const handleReset = () => {
    cardNumbers.reset();
    card.reset();
    expirationDate.reset();
    cvc.reset();
    password.reset();
  };

  const handleSubmit = async () => {
    const issuerCode = Object.entries(ISSUER_CODE).find(([_, issuerCode]) => {
      return issuerCode?.card === card.values.card;
    });
    if (!issuerCode) throw new Error();
    const [issuerCodeKey] = issuerCode;

    const body = {
      number: Object.values(cardNumbers.values).join(''),
      expirationDate: `${expirationDate.values.month}/${expirationDate.values.year}`,
      cvc: cvc.values.cvc,
      issuerCode: issuerCodeKey,
    };
    await postCards(body);
    navigate(ROUTES.PAYMENTS.CARDS);
  };

  return (
    <Outlet
      context={{
        cardNumbers,
        card,
        expirationDate,
        cvc,
        password,
        brandCard,
        handleSubmit,
        handleReset,
      }}
    />
  );
};
