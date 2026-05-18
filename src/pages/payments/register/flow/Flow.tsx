import { Outlet } from 'react-router';

import { useRegisterCardForm } from '../form/hooks/useRegisterCardForm';
import { useRegisterCardAction } from './hooks/useRegisterCardAction';

import { getBrandCard } from '../form/utils';

export const Flow = () => {
  // form
  const { cardNumbers, card, expirationDate, cvc, password } = useRegisterCardForm();
  const brandCard = getBrandCard(Object.values(cardNumbers.values));

  // submit(action)
  const { mutate: register, serverError } = useRegisterCardAction({
    values: { cardNumbers, card, expirationDate, cvc },
  });

  const handleSubmit = async () => {
    register();
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
        serverError,
      }}
    />
  );
};
