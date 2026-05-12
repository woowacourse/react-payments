import { Outlet, useNavigate } from 'react-router';

import { useCardNumbers } from '../form/hooks/useCardNumbers';
import { useCard } from '../form/hooks/useCard';
import { useExpirationDate } from '../form/hooks/useExpirationDate';
import { useCvc } from '../form/hooks/useCvc';
import { usePassword } from '../form/hooks/usePassword';

import { BRAND_NUMBER } from '../form/constant';

export const Flow = () => {
  const cardNumbers = useCardNumbers();

  const card = useCard();

  const expirationDate = useExpirationDate();

  const cvc = useCvc();

  const password = usePassword();

  const renderBrandCard = (cardNumbers: string[]) => {
    const brandCard = Object.entries(BRAND_NUMBER).find(([key, brand]) => {
      const { startNumber } = brand;
      if (startNumber.some((brandNumber) => cardNumbers[0].startsWith(brandNumber))) return true;
    });

    return brandCard ? brandCard?.[0] : 'default';
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/payments/register/complete');
  };

  return (
    <Outlet
      context={{
        cardNumbers,
        card,
        expirationDate,
        cvc,
        password,
        renderBrandCard,
        handleSubmit,
      }}
    />
  );
};
